// import { notFound } from 'next/navigation';
// import { ProjectDetail } from '@/components/project-detail';
// import { client, type Project } from '@/lib/sanity';

// interface ProjectPageProps extends PageProps {
//   params: promise<{
//     slug: string;
//   }>;
// }

// async function getProject(slug: string): Promise<Project | null> {
//   try {
//     const query = `*[_type == "project" && slug.current == $slug][0] {
//       _id,
//       title,
//       slug,
//       description,
//       image,
//       technologies,
//       githubUrl,
//       liveUrl,
//       featured,
//       publishedAt
//     }`;

//     const project = await client.fetch(query, { slug });
//     return project;
//   } catch (error) {
//     console.error('Error fetching project:', error);
//     return null;
//   }
// }

// export default async function ProjectPage({ params }: ProjectPageProps) {
//   const project = await getProject(params.slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="pt-24 pb-16">
//       <ProjectDetail project={project} />
//     </main>
//   );
// }

import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/project-detail';
import { client, type Project } from '@/lib/sanity';

type Params = Promise<{ slug: string }>;

async function getProject(slug: string): Promise<Project | null> {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      image,
      technologies,
      githubUrl,
      liveUrl,
      featured,
      publishedAt
    }`;

    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  // ✅ must await params in Next.js 15
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16">
      <ProjectDetail project={project} />
    </main>
  );
}
