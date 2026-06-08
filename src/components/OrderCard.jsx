import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ deleteOrderCard, title, image, price }) => {
  let renderXMarIcon;

  if (deleteOrderCard) {
    renderXMarIcon = (
      <XMarkIcon
        className="h-6 w-6 text-black-500 cursor-pointer"
        onClick={() => deleteOrderCard()}
      ></XMarkIcon>
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-14">
          <img
            className="w-16 h-16 min-w-16 max-h-16 rounded-lg object-cover flex-shrink-0"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-xs font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium ps-4">{price}</p>
        {renderXMarIcon}
      </div>
    </div>
  );
};

export default OrderCard;
