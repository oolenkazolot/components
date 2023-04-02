import { PageTitle } from '../components/PageTitle/PageTitle';
import { Form } from '../components/Form/Form';
import './FormPage.scss';
const mainClass = 'form-page';

export const FormPage: () => JSX.Element = () => {
  return (
    <>
      {/* <Header title="Form" /> */}
      <main className="main">
        <PageTitle title="Form" />
        <section className={`${mainClass}__form`}>
          <Form />
        </section>
      </main>
    </>
  );
};
