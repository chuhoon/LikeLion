import Footer from '../../components/footer/Footer.jsx';

export default function Login() {
  return (
    <>
      <p>id나 pw가 잘못 되었습니다. 다시 로그인 해주세요.</p>
      <form action="">
        <input type="text" />
        <br />
        <input type="pw" />
        <br />
      </form>
      <Footer />
    </>
  );
}
