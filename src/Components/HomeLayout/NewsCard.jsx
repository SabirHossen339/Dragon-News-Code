import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    rating,
    total_view,
    author,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg  hover:shadow-xl transition duration-300 border border-base-200">

      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-md">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{news.author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(news.author.published_date), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 hover:text-primary">
          <button >
          <FaRegBookmark></FaRegBookmark>
        </button>
        <button >
          <FaShareAlt></FaShareAlt>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold leading-snug hover:text-primary transition">
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md w-full h-70 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-4">

        {/* Description */}
        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">

          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating?.number || 0)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              ({rating?.number})
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaEye />
            {total_view}
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="btn btn-secondary btn-sm">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;