import styles from "./Register.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const { createUser, error: authError, loading } = useAuthentication();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError("As senhas devem ser iguais");
      return;
    }

    if (!validateEmail(email)) {
        setError("Email inválido");
        return;
      }

      try {
        await createUser(user);
      } catch {
        setError("Não foi possível criar seu usuário. Tente novamente.");
    };
};

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  

  return (
    <div className={styles.register}>
      <h1>Crie sua conta em nossa Plataforma</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome de usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email de usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Senha muito curta, mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Confirmar Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && (
          <button type="submit" className="btn">
            Cadastrar
          </button>
        )}
        {loading && (
          <button type="submit" disabled className="btn">
            Carregando...
          </button>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;