import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let result; // define result here
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((response) => (result = response))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next contact app</title>
        <meta name="description" content="Next Contact App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Contact app</h1>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.formLable}>Your Name:</label>
              <input
                type="text"
                name="name"
                className={styles.formControl}
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLable}>Your Email:</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLable}>Message:</label>
              <textarea
                name="message"
                className={styles.formControl}
                rows="10"
                {...register("message", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className={styles.formGroup}>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
