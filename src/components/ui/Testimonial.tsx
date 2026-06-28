interface TestimonialProps {
  name: string;
  title: string;
  rating: number;
  text: string;
  image?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  rating,
  text,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <div className="text-yellow-400 mb-3">
        {'★'.repeat(rating)}
      </div>
      <p className="text-gray-700 italic">"{text}"</p>
    </div>
  );
};
