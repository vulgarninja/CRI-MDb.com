import Container from "react-bootstrap/Container"
import "../App.css"

export function Contact ( props ) {
  return (
    // Placeholder Contact Form
      <Container style={{ paddingTop: '20px'}}>
        <div className='ContactForm'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='contactForm'>
                  <form id='contact-form' noValidate>
                    {/* Row 1 of form */}
                    <div className='row formRow'>
                      <div className='col-6'>
                        <input
                          type='text'
                          name='name'
                          className='form-control formInput'
                          placeholder='Name'
                          style={{margin:10}}
                        ></input>
                      </div>
                      <div className='col-6'>
                        <input
                          type='email'
                          name='email'
                          className='form-control formInput'
                          placeholder='Email address'
                          style={{margin:10}}
                        ></input>
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className='row formRow'>
                      <div className='col'>
                        <input
                          type='text'
                          name='subject'
                          className='form-control formInput'
                          placeholder='Subject'
                          style={{margin:10}}
                        ></input>
                      </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className='row formRow'>
                      <div className='col'>
                        <textarea
                          rows={3}
                          name='message'
                          className='form-control formInput'
                          placeholder='Message'
                          style={{margin:10}}
                        ></textarea>
                      </div>
                    </div>
                    <button className='submit-btn' type='submit'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
}