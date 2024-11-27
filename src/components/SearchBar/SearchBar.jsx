import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleSubmit }) => {
  return (
    <section className={css.container}>
      <header className={css.wrapper}>
        <form className={css.inputWrapper} onSubmit={handleSubmit}>
          <input
            className={css.searchField}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <CiSearch className={css.icon} />
          </button>
        </form>
      </header>
    </section>

    // <div className={css.container}>
    //   <div className={css.wrapper}>
    //     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    //       <Form>
    //         <div className={css.inputWrapper}>
    //           <CiSearch className={css.icon} />
    //           <Field
    //             className={css.searchField}
    //             name="query"
    //             placeholder="Search images and photos"
    //           />
    //         </div>
    //       </Form>
    //     </Formik>
    //   </div>
    // </div>
  );
};

export default SearchBar;
