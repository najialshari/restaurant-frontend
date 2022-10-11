import {
  Box
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { deepPurple } from "@mui/material/colors";
import { useState ,useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { scanQRAciton } from "../../redux/actions/qrcodes";
import { useNavigate, useParams } from "react-router-dom";
import './tableScan.css';
import PageNotFound from "../PageNotFound/PageNotFound";


const TableScan = () => {
  // const [tableData, setTableData] = useState();
  let { id } = useParams();
  // setTableData= id;
  console.log("isUUID Availble,",id)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getQrCodeInfo = async () => {
    await dispatch(scanQRAciton(id))
      .then(() => console.log("getQrCodeInfo", "sucess"))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getQrCodeInfo();
  }, [id]);

  // const isTableAvailble = useSelector(state => state?.qrcodes?.isAuthenticated)

  // console.log("isTableAvailble,",isTableAvailble)
  // if(isTableAvailble)navigate("/");
  // else navigate("/notfound");

  

  const isTableAvailble = useSelector(state => state?.qrcodes?.success);
  const [isTableAvailbleNow, setIsTableAvailbleNow] = useState(isTableAvailble);


  useEffect(()=>{
    setIsTableAvailbleNow(isTableAvailble);
  console.log("isTableAvailble,",isTableAvailble)
  if(isTableAvailble)navigate("/");
  // else navigate("/notfound");
}, [isTableAvailble]);
  
  return (
    (!isTableAvailbleNow)?
    < PageNotFound /> :null
  );
};

export default TableScan;
