import {motion} from "framer-motion"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
         404 - Not found 
        </h2>
        <h2 className="text-3xl font-bold mt-6 text-center  text-white">
            Page doesn't exist
        </h2>
        <Link to={"/"}>
          <button
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
            </button>
        </Link>
        
        
      </div>
      
    </motion.div>
  );
};

export default NotFoundPage;
