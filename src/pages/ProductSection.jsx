import React, { Suspense } from "react";
import SubNav from "../components/SubNav";

const BetaApp = React.lazy(() => import("./BetaApp"));
const Preschool = React.lazy(() => import("./Preschool"));
const TenthBoard = React.lazy(() => import("./TenthBoard"));
const Scholarships = React.lazy(() => import("./Scholarships"));
const VRExperience = React.lazy(() => import("./VRExperience"));

const ProductSection = () => {
  const subNavItems = [
    { id: "betaapp", label: "Prototype App" },
    { id: "preschool", label: "Content Design" },
    { id: "10th-board", label: "School" },
    { id: "scholarships", label: "Scholarships" },
    { id: "vr", label: "VR Experience" },
  ];

  return (
    <div className="flex relative">
      <SubNav items={subNavItems} />
      <div className="ml-0 pt-14 lg:pt-0 lg:ml-64 w-full">
        <Suspense fallback={null}>
          <div id="betaapp">
            <BetaApp />
          </div>
          <div id="preschool">
            <Preschool />
          </div>
          <div id="10th-board">
            <TenthBoard />
          </div>
          <div id="scholarships">
            <Scholarships />
          </div>
          <div id="vr">
            <VRExperience />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default ProductSection;
