import "./LoginPage.scss";
import { Button } from "../../components/UI"
import { Input } from "../../components/UI"
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/typography";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


const loginFormSchema = yup.object({
  useremail: yup.string().email("Введите почту в правильном формате").required("обязательтельное поля"),
  userpassword: yup.string().required("обязательтельное поля").min(8, " Минимум 8 поля"),
})

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

export const LoginPage = () => {
  const { control, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(loginFormSchema), defaultValues: { useremail: "", userpassword: "" }, });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);

  }


  return (
    <div className="LoginPage">
      <Heading text="Авторизация " />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <Input isError={errors.useremail ? true : false} errorMessage={errors.useremail?.message} type="text" placeholder="Pochta" {...field} />
          )}
        />

        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <Input isError={errors.userpassword ? true : false} errorMessage={errors.userpassword?.message} type="password" placeholder=" Пароль" {...field} />
          )}
        />

        <Button type={"submit"} text={"Войти"} />
      </form>
      <AppLink text="Забыли пароль?" href="#" />
      <AuthWith />

    </div>
  );
};
