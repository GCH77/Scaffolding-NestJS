import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'pdn').default('dev'),
  POSTGRESQL_HOST: Joi.string().required(),
  POSTGRESQL_PORT: Joi.number().positive().required(),
  POSTGRESQL_USERNAME: Joi.string().required(),
  POSTGRESQL_PASSWORD: Joi.string().required(),
  POSTGRESQL_DATABASE: Joi.string().required(),
});
