import "./LoginPage.scss";
import { Button } from "../../components/UI"
import { Input } from "../../components/UI"
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/typography";
import { useNavigate, useParams ,useLocation} from "react-router";

export const LoginPage = () => {

const params = useParams()
const location = useLocation()
const navigate = useNavigate()

console.log("Location",location);
console.log("nav",navigate);
console.log(params);

  return (
    <div className="LoginPage">
      <Heading text="Авторизация "/>
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder=" Пароль" />
        <Button text={"Войти"} />
      </form>
      <AppLink text="Забыли пароль?" href="#"/>
      <AuthWith />

    </div>
  );
};
