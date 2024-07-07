import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin1234",
    },
  });
  const [login, { error }] = useLoginMutation();

  // console.log("data =>", data);
  // console.log("error =>", error);

  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    console.log(res);

    const user = verifyToken(res?.data?.accessToken);
    console.log(user);

    dispatch(
      setUser({
        user,
        token: res?.data?.accessToken,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
