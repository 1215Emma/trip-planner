import CreateRadiusName from "./CreateRadiusName";
import CreateRadiusAddress from "./CreateRadiusAddress";
import CreateRadiusOther from "./CreateRadiusOther";

const PageDisplay = () => {
  if (page === 0) {
    return (
      <CreateRadiusName
        setRadiusFormData={setRadiusFormData}
        radiusFormData={radiusFormData}
      />
    );
  } else if (page === 1) {
    return (
      <CreateRadiusAddress
        setRadiusFormData={setRadiusFormData}
        radiusFormData={radiusFormData}
      />
    );
  } else if (page === 2) {
    return (
      <CreateRadiusOther
        setRadiusFormData={setRadiusFormData}
        radiusFormData={radiusFormData}
      />
    );
  }
};
