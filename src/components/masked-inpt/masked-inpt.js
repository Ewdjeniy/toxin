import './masked-inpt.css';
import Inputmask from "inputmask";


const maskedDate = new Inputmask("99.99.9999");
maskedDate.mask('.masked-inpt');
