// import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Discount from "../Pages/Discount/Discount";
import InnerTurizm from "../Pages/InnerTurizm/InnerTurizm";
import OuterTurizm from "../Pages/OuterTurizm/OuterTurizm";
import Home from "../Home/Home";
import NotFound from "../Pages/NotFound";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router";
// import InnerSlug from "../Pages/Inner-turism-slug/slug";
import Slug from "../Pages/Outer-turism-slug/slug";
const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/innerTurizm" element={<InnerTurizm />} />
      <Route path="/outerTurizm" element={<OuterTurizm />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/contact" element={<Contact />} />

      {/* there should be a 'discount' page slug */}
      <Route path="/discount/:slug" element={<Slug />}></Route>
      <Route path="/innerTurizm/:slug" element={<Slug />}></Route>
      <Route path="/outerTurizm/:slug" element={<Slug />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Routess;
