import React from 'react'
import { PrismaClient } from "@prisma/client";

export default function ShortidPage() {
  return (
    <div>
        <h1>ShortidPage</h1>
    </div>
  );
}

export async function getServerSideProps({ params }) {
    const prisma = new PrismaClient();
    const { shortId } = params;
    const data = await prisma.link.findUnique({
        where : {  shortUrl: shortId  },
    });

    if (!data) {
        return {
            redirect: { destination: '/' }
        };
    }
     else {
        return {
            redirect: { destination: data.url }
        };
     };
}