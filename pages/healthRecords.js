import React, { useEffect } from "react";
import Wrappers from "../assets/wrappers/Membership";
import { useAppcontext } from "../context/appContext";

import HealthRecords from "../components/HealthRecords";
import LoggedInHome from "../components/LoggedInHome";
import { useRouter } from "next/router";

let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const HealthRecord = () => {
  const {
    getSubscription,
    subscriptionPlanCount,
    getData,
    setQueryId,
    queryId,
  } = useAppcontext();
  const router = useRouter();
  const pathId = router.asPath.split("?")[1];

  const id = patientId === "undefined" ? pathId : patientId;

  useEffect(() => {
    getSubscription("subscription", { api_key: "get", p_id: patientId });
    getData("patient", {
      api_key: "get_personal_info",
      data: { p_id: id },
    });
    setQueryId(id);
  }, []);
  console.log({ queryId });

  return (
    <>
      <HealthRecords />
    </>
  );
};
HealthRecord.Layout = LoggedInHome;
export default HealthRecord;
