import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import type { CourseDetail as CourseDetailType } from "@/lib/types";

type CourseDetailProps = {
  title: string;
  courses: CourseDetailType[];
};

export function CourseDetail({ title, courses }: CourseDetailProps) {
  const tabItems = courses.map((course) => ({
    id: course.id,
    label: course.title,
    content: course
  }));

  return (
    <section className="bg-neutralGray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={title} />
        <Tabs
          items={tabItems}
          renderContent={(course) => (
            <Card>
              <h3 className="text-xl font-semibold text-navy-900">{course.title}</h3>
              <div className="mt-3 grid gap-2 text-sm text-neutralGray-600 md:grid-cols-3">
                <p>{course.format}</p>
                <p>{course.duration}</p>
                <p className="font-semibold text-teal-500">{course.price}</p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-neutralGray-600">
                {course.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 text-teal-500">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        />
      </div>
    </section>
  );
}
