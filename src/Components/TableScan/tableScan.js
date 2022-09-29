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
      .catch((err) => console.error("disPatch err",err))
      
  };
    // dispatch(scanQRAciton(id))
  useEffect(() => {
    getQrCodeInfo();
    // checkTable()


  }, [id]);

  const isTableAvailble = useSelector(state => state?.qrcodes?.isAuthenticated);

  console.log("isTableAvailble,",isTableAvailble)
  if(isTableAvailble)navigate("/");
  else navigate("/notfound");
  
  // const checkTable =  () => {
  // console.log("isTableAvailble,",isTableAvailble)
  // if(isTableAvailble)navigate("/");
  // if(!isTableAvailble)navigate("/notfound");
  // }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "auto",
        width: "40vw",
        height: "85vh",
      }}
    >
      
    </Box>
  );
};

export default TableScan;
