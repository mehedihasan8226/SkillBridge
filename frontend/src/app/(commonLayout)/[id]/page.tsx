

// import { getTutorProfilesById } from "@/actions/blog.action";
import { getTutorProfilesById } from "@/actions/tutor.action";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function TutorProfilePage(
    // { params }: PageProps
    {
  params,
}: {
  params: Promise<{ id: string }>;
}
) {
     const { id } = await params; 
  const res = await getTutorProfilesById(id);


  if (!res?.data) {
    return (
      <div className="p-10 text-center text-red-500">
        Tutor profile not found
      </div>
    );
  }

  const tutor = res?.data;
  console.log("tutor:", tutor);
  console.log("tutor:", tutor?.data?.user?.name);
  
  const imageSrc =
  tutor?.data?.profileImage?.startsWith("http")
    ? tutor.data.profileImage
    : "/avatar.png";

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 grid md:grid-cols-3 gap-6">
        
        {/* Left: Profile */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 rounded-full border overflow-hidden">
            <Image
              src={imageSrc}
              alt={tutor?.data?.user?.name || "Profile Image"}
              fill
              className="object-cover"
            />
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            {tutor?.data?.user?.name}
          </h2>
          <p className="text-gray-500">{tutor?.data?.qualification}</p>
          <p className="text-sm text-gray-400">{tutor?.data?.university}</p>

          <span className="mt-2 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
            {tutor?.data?.availability ? "Available" : "Not Available"}
          </span>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tutor?.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Info label="Gender" value={tutor?.data?.gender} />
            <Info label="Nationality" value={tutor?.data?.nationality} />
            <Info label="Experience" value={`${tutor?.data?.experience} year`} />
            <Info label="Teaching Mode" value={tutor?.data?.teachingMode} />
            <Info label="Monthly Rate" value={`$${tutor?.data?.monthlyRate}`} />
            <Info label="Major Subject" value={tutor?.data?.majorSubject} />
            <Info label="Phone" value={tutor?.data?.phone} />
            <Info label="Email" value={tutor?.data?.user?.email} />
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold mb-2">Languages</h4>
            <div className="flex gap-2 flex-wrap">
              {tutor?.data?.languages?.map((lang: string) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Contact Tutor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small reusable component */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 dark:bg-zinc-800 p-3 rounded-lg">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
