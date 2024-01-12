import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import Conditions from "../../components/content/Conditions";
import { FaLessThan } from "react-icons/fa6";

export default function Address({orderDetail,setOrderDetail,setValue}) {

  const formik = useFormik({
    initialValues: {
      email: '',
      Country: "",
      First: "",
      Last: "",
      Instagram: "",
      Address: "",
      Apartment: "",
      City: "",
      State: "",
      PIN: "",
      number: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      Country: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      First: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      Last: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      Instagram: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      Address: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      Apartment: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      City: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      State: Yup.string().max(20, 'Must be 20 characters or less').required("Required"),
      PIN: Yup.string().min(6, 'Must be 6 Digit').required("Required"),
      number: Yup.string().min(10, 'Must be 10 number').required("Required"),
    }),
    onSubmit: (values) => {
        setOrderDetail(values);
        setValue("2");
      },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex justify-center">
        <div className="w-11/12 pr-10">
          <p className="text-lg font-semibold mb-2">Contact</p>
          <div className="pt-3">
            <div>
              <input
                id="email"
                name="email"
                placeholder="Type your email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-3 rounded-md border-blue-600 w-full h-12 pl-2"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox />
              <p>Email me with news and offers</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2 pt-3">Shipping address</p>
            <div>
              <input
                id="Country"
                name="Country"
                placeholder="Country/Origin"
                type="text"
                value={formik.values.Country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pl-2 border-3 rounded-md border-blue-600 w-full h-12"
              />
              {formik.touched.Country && formik.errors.Country ? (
                <div className="text-red-500">{formik.errors.Country}</div>
              ) : null}
            </div>
            <div className="flex gap-3 mt-3">
              <div>
                <input
                  id="First"
                  name="First"
                  placeholder="First name"
                  type="First"
                  value={formik.values.First}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className=" pl-2 border-3 rounded-md border-blue-600 w-full h-12"
                />
                {formik.touched.First && formik.errors.First ? (
                  <div className="text-red-500">{formik.errors.First}</div>
                ) : null}
              </div>
              <div>
                <input
                  id="Last"
                  name="Last"
                  placeholder="Last name"
                  type="text"
                  value={formik.values.Last}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className=" pl-2 border-3 rounded-md border-blue-600 w-full h-12"
                />
                {formik.touched.Last && formik.errors.Last ? (
                  <div className="text-red-500">{formik.errors.Last}</div>
                ) : null}
              </div>
            </div>
            <div>
              <input
                id="Instagram"
                name="Instagram"
                placeholder="Instagram ID"
                type="text"
                value={formik.values.Instagram}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pl-2 border-3 rounded-md border-blue-600 w-full h-12 mt-3"
              />
              {formik.touched.Instagram && formik.errors.Instagram ? (
                <div className="text-red-500">{formik.errors.Instagram}</div>
              ) : null}
            </div>
            <div>
              <input
                id="Address"
                name="Address"
                placeholder="Address"
                type="text"
                value={formik.values.Address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pl-2 border-3 rounded-md border-blue-600 w-full h-12 mt-3"
              />
              {formik.touched.Address && formik.errors.Address ? (
                <div className="text-red-500">{formik.errors.Address}</div>
              ) : null}
            </div>
            <div>
              <input
                id="Apartment"
                name="Apartment"
                placeholder="Apartment, suit etc."
                type="text"
                value={formik.values.Apartment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" pl-2 border-3 rounded-md border-blue-600 w-full h-12 mt-3"
              />
              {formik.touched.Apartment && formik.errors.Apartment ? (
                <div className="text-red-500">{formik.errors.Apartment}</div>
              ) : null}
            </div>
            <div className="flex gap-3 mt-3">
              <div>
                <input
                  id="City"
                  name="City"
                  placeholder="City"
                  type="text"
                  value={formik.values.City}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="pl-2 border-3 rounded-md border-blue-600 w-full h-12"
                />
                {formik.touched.City && formik.errors.City ? (
                  <div className="text-red-500">{formik.errors.City}</div>
                ) : null}
              </div>
              <div>
                <input
                  id="State"
                  name="State"
                  placeholder="State"
                  type="text"
                  value={formik.values.State}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className=" pl-2 border-3 rounded-md border-blue-600 w-full h-12"
                />
                {formik.touched.State && formik.errors.State ? (
                  <div className="text-red-500">{formik.errors.State}</div>
                ) : null}
              </div>
              <div>
                <input
                  id="PIN"
                  name="PIN"
                  placeholder="PIN Code"
                  type="number"
                  value={formik.values.PIN}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-3 rounded-md border-blue-600 w-full h-12 pl-2"
                />
                {formik.touched.PIN && formik.errors.PIN ? (
                  <div className="text-red-500">{formik.errors.PIN}</div>
                ) : null}
              </div>
            </div>
            <div>
              <input
                id="number"
                name="number"
                placeholder="Phone Number"
                type="number"
                value={formik.values.Phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-3 rounded-md border-blue-600 w-full h-12 mt-3 pl-2"
              />
              {formik.touched.number && formik.errors.number ? (
                <div className="text-red-500">{formik.errors.number}</div>
              ) : null}
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox />
              <p>Save this information for next time</p>
            </div>
            <div className="flex justify-between mb-5">
              <a href="/cart" className="flex gap-2 items-center text-blue-600">
                <FaLessThan />
                Return to Cart
              </a>
              <div className="w-[180px] h-[60px] rounded text-sm font-semibold bg-blue-600 text-white flex items-center justify-center">
                <button type="submit" 
                > Continue to Shipping </button>
              </div>
            </div>
            <Conditions/>
          </div>
        </div>
      </div>
    </form>
  );
}