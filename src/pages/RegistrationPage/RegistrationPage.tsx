import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import { Heading } from "../../components/typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useRegisterUserMutation } from "../../store/api/auth.api";
import { useEffect } from "react";
import { useNavigate } from "react-router";

// Схема валидации
const registrationFormSchema = yup.object({
  username: yup.string().required("Имя пользователя обязательно"),
  city: yup.string().required("Город обязателен"),
  useremail: yup.string().email("Введите почту в правильном формате").required("Email обязателен"),
  phone: yup.string().matches(/^\+?[1-9]\d{1,14}$/, "Неверный номер телефона").required("Номер телефона обязателен"),
  password: yup.string().required("Пароль обязателен").min(8, "Минимум 8 символов"),
});

interface IRegistrationForm {
  username: string;
  city: string;
  useremail: string;
  phone: string;
  password: string;
}

export const RegistrationPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      city: "",
      useremail: "",
      phone: "",
      password: "",
    },
  });

  const navigate = useNavigate()
  const [registerUser, { data: userData }] = useRegisterUserMutation();

  // useEffect(() => {
  //   if (userData?.user_id) {
  //     navigate("/main")
  //     localStorage.setItem("userId", JSON.stringify(userData.user_id))
  //   }
  // })


  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registerUser({
      email: data.useremail,
      name: data.username,
      phone_number: data.phone,
      password: data.password,
      user_city: data.city
    })
  }


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

        {/* Кнопка отправки формы */}
        <Button type="submit" text="Зарегистрироваться" />
      </form>
    </div>
  );
};
