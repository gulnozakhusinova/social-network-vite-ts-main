import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import { Heading } from "../../components/typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

// Схема валидации
const registrationFormSchema = yup.object({
  username: yup.string().required("Имя пользователя обязательно"),
  lastname: yup.string().required("Фамилия обязательна"),
  city: yup.string().required("Город обязателен"),
  useremail: yup.string().email("Введите почту в правильном формате").required("Email обязателен"),
  phone: yup.string().matches(/^\+?[1-9]\d{1,14}$/, "Неверный номер телефона").required("Номер телефона обязателен"),
  password: yup.string().required("Пароль обязателен").min(8, "Минимум 8 символов"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required("Подтвердите пароль")
});

interface IRegistrationForm {
  username: string;
  lastname: string;
  city: string;
  useremail: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      lastname: "",
      city: "",
      useremail: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="LoginPage">
      <Heading text="Регистрация" />
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Имя пользователя */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input isError={errors.username ? true : false} errorMessage={errors.username?.message} type="text" placeholder="Имя пользователя" {...field} />
          )}
        />
        
        {/* Фамилия */}
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <Input isError={errors.lastname ? true : false} errorMessage={errors.lastname?.message} type="text" placeholder="Фамилия" {...field} />
          )}
        />
        
        {/* Город */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input isError={errors.city ? true : false} errorMessage={errors.city?.message} type="text" placeholder="Город" {...field} />
          )}
        />
        
        {/* Email */}
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <Input isError={errors.useremail ? true : false} errorMessage={errors.useremail?.message} type="text" placeholder="Email" {...field} />
          )}
        />

        {/* Номер телефона */}
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input isError={errors.phone ? true : false} errorMessage={errors.phone?.message} type="text" placeholder="Номер телефона" {...field} />
          )}
        />
        
        {/* Пароль */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input isError={errors.password ? true : false} errorMessage={errors.password?.message} type="password" placeholder="Пароль" {...field} />
          )}
        />
        
        {/* Подтверждение пароля */}
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input isError={errors.confirmPassword ? true : false} errorMessage={errors.confirmPassword?.message} type="password" placeholder="Подтвердите пароль" {...field} />
          )}
        />
        
        {/* Кнопка отправки формы */}
        <Button type="submit" text="Зарегистрироваться" />
      </form>
    </div>
  );
};
