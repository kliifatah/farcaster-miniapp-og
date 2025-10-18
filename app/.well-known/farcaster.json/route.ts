import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
{
  "accountAssociation": {
    "header": "eyJmaWQiOjUyNjQwMCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGU4MTNiQTIzOWJmNzRiYjEwOEU2NTYzMUJiNWY0QzgzNDhiMjA5MzYifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC1vZy52ZXJjZWwuYXBwIn0",
    "signature": "cr6yWo/gKEkJHGJia9m7TMcdlkrENhjGlWvE9QkoEQUzhtTCEGbgP+Y7lIA/UhZqeJ5EcD5oroYGBLvKgKd+Dxw="
  },
  "frame": {
    "version": "1",
    "name": "Example Frame",
    "iconUrl": "https://farcaster-miniapp-og.vercel.app/icon.png",
    "homeUrl": "https://farcaster-miniapp-og.vercel.app",
    "imageUrl": "https://farcaster-miniapp-og.vercel.app/image.png",
    "buttonTitle": "Check this out",
    "splashImageUrl": "https://farcaster-miniapp-og.vercel.app/splash.png",
    "splashBackgroundColor": "#eeccff",
    "webhookUrl": "https://farcaster-miniapp-og.vercel.app/api/webhook"
  }
}
