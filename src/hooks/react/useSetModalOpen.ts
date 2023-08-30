import {
  setIsModalOpen,
  setIsModalOpen2,
  setIsModalOpen3,
  setIsModalOpen4,
} from "../../redux/modal/moda.slice";
import { useAppDispatch } from "../redux/hooks";

export const useSetModalOpen = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(setIsModalOpen(true));
  const handleClick2 = () => dispatch(setIsModalOpen2(true));
  const handleClick3 = () => dispatch(setIsModalOpen3(true));
  const handleClick4 = () => dispatch(setIsModalOpen4(true));
  return {
    handleClick,
    handleClick2,
    handleClick3,
    handleClick4,
    dispatch,
  };
};
