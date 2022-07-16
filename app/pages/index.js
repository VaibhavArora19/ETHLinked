import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import AchievementList from "../components/Achievements/AchievementList";

export default function Home() {
  const DUMMY = [
    {
      id: 1,
      user: "0X2B",
      title: "MLH",
      description: "MLH Fellowship",
      tag: "MLH",
      comments: [],
      timestamp: "20:01",
    },
    {
      id: 2,
      user: "0X2B",
      title: "MLH",
      description: "MLH Fellowship",
      tag: "MLH",
      comments: [],
      timestamp: "20:01",
    },
  ];

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {DUMMY.map((achievement) => (
        <AchievementList
          key={achievement.id}
          title={achievement.title}
          description={achievement.description}
          tag={achievement.tag}
          timestamp={achievement.timestamp}
          user={achievement.user}
        />
      ))}
    
    </div>
  );
}
