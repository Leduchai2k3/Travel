import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-[1000px] h-[600px] bg-[#F9F7F1] rounded-xl shadow-xl flex items-center justify-center">
        <form
          action=""
          className="flex flex-col items-center justify-center w-[70%]"
        >
          <h3 className="text-5xl font-extrabold">Login Form</h3>
          <div className="flex flex-col w-full gap-3 mt-10">
            <label htmlFor="name">Nhập Email</label>
            <input
              type="email"
              name="name"
              placeholder="Vui lòng nhập email của bạn"
              className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-3 mt-10">
            <label htmlFor="name">Nhập Mật khẩu</label>
            <input
              type="password"
              name="name"
              placeholder="Vui lòng nhâp mật khẩu của bạn"
              className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-10 py-5 mt-16 rounded-lg bg-[#ED4949] text-white font-bold text-xl"
          >
            Đăng nhập
          </button>
          <NavLink className="mt-4">Don’t have an account? Register</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
