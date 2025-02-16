import { getProfile, getProjects } from "@/sanity/sanity.query";
import { Profile, Project } from "@/types";

export default async function Page() {
  const profile: Profile = await getProfile();
  console.log(2, profile.fullBio);
  const projects: Project[] = await getProjects();
  console.log(1, projects);
  return (
    <div>
      Projects enter here
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
      <h1>Projects Page</h1>
      <p>This is the projects page, where you can see all my projects.</p>
      <p>Click on a project to learn more about it.</p>
    </div>
  );
}
