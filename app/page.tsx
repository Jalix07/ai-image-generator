'use client'

import { FaMagic, FaImages, FaPalette, FaDownload } from 'react-icons/fa'
import ImageGenerator from '@/components/ImageGenerator'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            AI Image Generator
          </h1>
          <p className="text-xl text-white/90">
            Create stunning images with DALL-E 3. Turn your ideas into beautiful art in seconds!
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <FaMagic className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-white/80">
              Advanced DALL-E 3 technology
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <FaImages className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Multiple Styles</h3>
            <p className="text-sm text-white/80">
              Realistic, artistic, and more
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <FaPalette className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Built-in Editor</h3>
            <p className="text-sm text-white/80">
              Edit and customize your images
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <FaDownload className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">High Quality</h3>
            <p className="text-sm text-white/80">
              Download in HD resolution
            </p>
          </div>
        </div>

        {/* Image Generator Component */}
        <ImageGenerator />

        {/* Stats */}
        <div className="mt-12 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold">100M+</div>
              <div className="text-white/80">Images Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5M+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.9★</div>
              <div className="text-white/80">User Rating</div>
            </div>
          </div>
        </div>

        {/* Popular Templates */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Popular Templates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Instagram Post (1:1)',
              'Instagram Story (9:16)',
              'TikTok Video (9:16)',
              'YouTube Thumbnail (16:9)',
              'Facebook Post (1200x630)',
              'Twitter Header (1500x500)',
              'LinkedIn Banner (1584x396)',
              'Pinterest Pin (2:3)',
            ].map((template) => (
              <div
                key={template}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white hover:bg-white/20 cursor-pointer transition-colors"
              >
                <div className="text-center font-semibold">{template}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
