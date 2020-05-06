// create name with name metado and name contrrollers
import * as Yup from 'yup';

//create new middleware
export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fails', message: error.inner });
  }
};
