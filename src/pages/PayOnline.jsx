// //  const CourseCard = ({
// //    courseName,
// //    courseThumbnail,
// //    courseDetails,
// //    coursePrice,
// //    courseDiscountedPrice,
// //    courseDiscount,
// //  }) => {
// //    return (
// //      <article className="card">
// //        <img src={courseThumbnail} alt={courseName} />
// //        <div className="card-content">
// //          <header className="card-header">
// //            <h5>{courseName}</h5>
// //          </header>
// //          <p>{courseDetails}</p>
// //          <h4>
// //            ₹{courseDiscountedPrice}{" "}
// //            <span className="course-price">₹{coursePrice}</span>{" "}
// //            <span className="course-discount-percentage">
// //              {courseDiscount}% OFF
// //            </span>
// //          </h4>
// //          <button type="button" className="course-payment-button">
// //            Buy Now
// //          </button>
// //        </div>
// //      </article>
// //    );
// //  };

// import React from "react";

// import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

// const PayOnline = () => {
//   const { error, isLoading, Razorpay } = useRazorpay();

//   const handlePayment = () => {
//     const options: RazorpayOrderOptions = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000, // Amount in paise
//       currency: "INR",
//       name: "Test Company",
//       description: "Test Transaction",
//       order_id: "order_9A33XWu170gUtm", // Generate order_id on server
//       handler: (response) => {
//         console.log(response);
//         alert("Payment Successful!");
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const razorpayInstance = new Razorpay(options);
//     razorpayInstance.open();
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       {isLoading && <p>Loading Razorpay...</p>}
//       {error && <p>Error loading Razorpay: {error}</p>}
//       <button onClick={handlePayment} disabled={isLoading}>
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default PayOnline;
// var options = {
//   key: "",
//   key_secret: "",
//   amount: parseInt(grandTotal * 100),
//   currency: "INR",
//   order_receipt: "order_rcptid_" + name,
//   name: "E-Bharat",
//   description: "for testing purpose",
//   handler: function (response) {
//     console.log(response);
//     toast.success("Payment Successful");
//   },

//   theme: {
//     color: "#3399cc",
//   },
// };

// var pay = new window.Razorpay(options);
// pay.open();
// console.log(pay);
// const [name, setName] = useState("");
// const [address, setAddress] = useState("");
// const [pincode, setPincode] = useState("");
// const [phoneNumber, setPhoneNumber] = useState("");

// const PayOnline = async () => {
//   // validation
//   if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
//     return toast.error("All fields are required", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
//   }
//   const addressInfo = {
//     name,
//     address,
//     pincode,
//     phoneNumber,
//     date: new Date().toLocaleString("en-US", {
//       month: "short",
//       day: "2-digit",
//       year: "numeric",
//     }),
//   };
//   console.log(addressInfo);

//   var options = {
//     key: "",
//     key_secret: "",
//     amount: parseInt(grandTotal * 100),
//     currency: "INR",
//     order_receipt: "order_rcptid_" + name,
//     name: "E-Bharat",
//     description: "for testing purpose",
//     handler: function (response) {
//       // console.log(response)
//       toast.success("Payment Successful");

//       const paymentId = response.razorpay_payment_id;
//       // store in firebase
//       const orderInfo = {
//         cartItems,
//         addressInfo,
//         date: new Date().toLocaleString("en-US", {
//           month: "short",
//           day: "2-digit",
//           year: "numeric",
//         }),
//         email: JSON.parse(localStorage.getItem("user")).user.email,
//         userid: JSON.parse(localStorage.getItem("user")).user.uid,
//         paymentId,
//       };

//       try {
//         const result = addDoc(collection(fireDB, "orders"), orderInfo);
//       } catch (error) {
//         console.log(error);
//       }
//     },

//     theme: {
//       color: "#3399cc",
//     },
//   };
//   var pay = new window.Razorpay(options);
//   pay.open();
//   console.log(pay);
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
//  import { toast } from 'react-toastify';

function PayOnline() {
  const navigate = useNavigate("");
  function sign() {
    navigate("/");
    toast.success("Thankyou for visiting here!");
  }
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <h1 className="text-red-600">Click Here for Payment </h1>
      <br />

      <StripeCheckout
        token={onToken}
        name="Payment Gateway❤️"
        currency="USD"
        amount="5000$"
        stripeKey="pk_test_51QLdcpKrzIFALdHmVA0Fhl69ciD0U9Be32I0X8PbTuMsNEJwIXdsz89bAKMl2ht0Oh1oLv6dalOOqXGpfjbm9ZHO00wIegpPeK"
      />
      <br />

      <button
        onClick={sign}
        className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
      >
        go to home page
      </button>
    </>
  );
}

export default PayOnline;
