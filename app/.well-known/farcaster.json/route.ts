import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
   {
  "accountAssociation": {
    "header": "eyJmaWQiOjUyNjQwMCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGU4MTNiQTIzOWJmNzRiYjEwOEU2NTYzMUJiNWY0QzgzNDhiMjA5MzYifQ",
    "payload": "eyJkb21haW4iOiJvZ2Ryb3BzLnh5eiJ9",
    "signature": "rGvyen3p0IXPsKNTB3C+75w1Cvo689Irm6Hx7kC1CD13gdyJkL8+I0jgue0FAz4UOYGLmJZIuzqnwzQlrMaVNxw="
  },
  "frame": {
    "version": "1",
    "name": "Example Frame",
    "iconUrl": "https://ogdrops.xyz/icon.png",
    "homeUrl": "https://ogdrops.xyz",
    "imageUrl": "https://ogdrops.xyz/image.png",
    "buttonTitle": "Check this out",
    "splashImageUrl": "https://ogdrops.xyz/splash.png",
    "splashBackgroundColor": "#eeccff",
    "webhookUrl": "https://ogdrops.xyz/api/webhook"
  }
}
