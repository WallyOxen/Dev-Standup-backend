import * as yup from "yup";

const noteSchema = yup.object().shape({
  dev_id: yup.number().required(),
  yesterday: yup.string().required(),
  today: yup.string().required(),
  blockers: yup.string().required(),
  date: yup.date().required(),
});

export { noteSchema };
