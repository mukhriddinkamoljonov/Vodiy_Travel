import { BrowserRouter as Router, Route, Routes, Switch } from "react-router";
import Contact from "../Pages/Contact/Contact";
import Discount from "../Pages/Discount/Discount";
import InnerTourism from "../Pages/InnerTourism/InnerTourism";
import OuterTourism from "../Pages/OuterTourism/OuterTourism";
import Home from "../Home/Home";
import NotFound from "../Pages/NotFound";
import Slug from "../Pages/Outer-tourism-slug/slug";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/innerTourism" element={<InnerTourism />} />
      <Route path="/outerTourism" element={<OuterTourism />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discount/:slug" element={<Slug />}></Route>
      <Route path="/innerTourism/:slug" element={<Slug />}></Route>
      <Route path="/outerTourism/:slug" element={<Slug />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Routers;
