import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const saveHome = (req: Request, res: Response, next: NextFunction) => {
  const ServiceSchema = Joi.object({
    serviceType: Joi.string().required(),
    description: Joi.string().required()
  });

  const validationRule = Joi.object({
    title: Joi.string().required(),
    intro: Joi.string().required(),
    services: Joi.array().items(ServiceSchema).min(1).required()
  });

  const { error } = validationRule.validate(req.body);
  if (error) {
    return res.status(412).json({
      success: false,
      message: 'Validation failed',
      data: error.details[0].message,
    });
  }

  next();
};

export default {
  saveHome,
};
