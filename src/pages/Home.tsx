import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Counter from "../components/Counter"
import TestimonialSlider from "../components/TestimonialSlider"
import ReservationForm from "../components/ReservationForm"
import MenuAPI from "../components/MenuAPI"

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1
                className="display-3 text-white"
                data-aos="fade-right"
              >
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p
                className="text-white mb-4 pb-2"
                data-aos="fade-right"
              >
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                to="/booking"
                className="btn btn-primary py-sm-3 px-sm-5 me-3"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-delay="200"
              >
                Book A Table
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img
                className="img-fluid"
                src="img/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Our Services
            </h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                  <h5>Master Chefs</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                  <h5>Quality Food</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                  <h5>Online Order</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                  <h5>24/7 Service</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    src="img/about-1.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    src="img/about-2.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    src="img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    src="img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>
                Restaurant
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center border-start border-5 border-primary px-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Counter
                      end={15}
                      duration={3000}
                    />
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center border-start border-5 border-primary px-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Counter
                      end={50}
                      duration={3000}
                    />
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="btn btn-primary py-3 px-5 mt-2"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Menu Start --> */}

      <MenuAPI />

      {/* <!-- Menu End --> */}

      {/* <!-- Reservation Start --> */}
      <div
        className="container-xxl py-5 px-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-src=""
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
            </div>
          </div>
          <ReservationForm />
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
              >
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allow="autoplay"
                  title="Video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reservation Start --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="img/team-1.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="img/team-2.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="img/team-3.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="img/team-4.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div
        className="container-xxl py-5"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <TestimonialSlider />
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <Back to Top  */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  )
}

export default Home
