'use client'

import { useState } from 'react'
import { FaMagic, FaDownload, FaExpand } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface GeneratedImage {
  id: string
  url: string
  prompt: string
  timestamp: Date
}

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('realistic')
  const [size, setSize] = useState('1024x1024')
  const [generating, setGenerating] = useState(false)
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [credits, setCredits] = useState(5)

  const styles = [
    { id: 'realistic', name: 'Realistic', description: 'Photo-realistic images' },
    { id: 'artistic', name: 'Artistic', description: 'Painterly and artistic' },
    { id: 'anime', name: 'Anime', description: 'Japanese anime style' },
    { id: 'digital', name: 'Digital Art', description: 'Modern digital art' },
    { id: '3d', name: '3D Render', description: '3D rendered look' },
    { id: 'abstract', name: 'Abstract', description: 'Abstract and creative' },
  ]

  const sizes = [
    { id: '1024x1024', name: 'Square (1:1)', pixels: '1024x1024' },
    { id: '1024x1792', name: 'Portrait (9:16)', pixels: '1024x1792' },
    { id: '1792x1024', name: 'Landscape (16:9)', pixels: '1792x1024' },
  ]

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt')
      return
    }

    if (credits <= 0) {
      alert('No credits remaining. Upgrade to premium for unlimited generations!')
      return
    }

    setGenerating(true)

    // Simulate API call (In production, this would call DALL-E 3 API)
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: `https://via.placeholder.com/${size.replace('x', 'x')}?text=${encodeURIComponent(prompt)}`,
        prompt: prompt,
        timestamp: new Date(),
      }
      setImages([newImage, ...images])
      setCredits(credits - 1)
      setGenerating(false)
    }, 3000)
  }

  const downloadImage = (url: string, prompt: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = `ai-${prompt.substring(0, 30)}.png`
    link.click()
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
      {/* Credits */}
      <div className="mb-6 flex justify-between items-center">
        <div className="text-white">
          <span className="text-lg font-semibold">Free Credits: </span>
          <span className="text-2xl font-bold text-yellow-300">{credits}</span>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
          Upgrade to Premium
        </button>
      </div>

      {/* Prompt Input */}
      <div className="mb-6">
        <label className="block text-white text-lg font-semibold mb-2">
          Describe your image
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
          placeholder="Example: A serene mountain landscape at sunset with vibrant orange and purple skies, snow-capped peaks, and a crystal clear lake reflecting the scenery..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      {/* Style Selection */}
      <div className="mb-6">
        <label className="block text-white text-lg font-semibold mb-3">
          Choose Style
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {styles.map((s) => (
            <button
              key={s.id}
              onClick={() => setStyle(s.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                style === s.id
                  ? 'border-blue-500 bg-blue-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <div className="text-white font-semibold text-sm">{s.name}</div>
              <div className="text-white/60 text-xs mt-1">{s.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-6">
        <label className="block text-white text-lg font-semibold mb-3">
          Image Size
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {sizes.map((s) => (
            <button
              key={s.id}
              onClick={() => setSize(s.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                size === s.id
                  ? 'border-blue-500 bg-blue-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <div className="text-white font-semibold">{s.name}</div>
              <div className="text-white/60 text-sm">{s.pixels}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateImage}
        disabled={generating || credits <= 0}
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
      >
        {generating ? (
          <>
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
            Generating your masterpiece...
          </>
        ) : (
          <>
            <FaMagic />
            Generate Image ({credits} credits left)
          </>
        )}
      </button>

      {/* Generated Images */}
      {images.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-4">Your Creations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-square bg-gray-200">
                  <img
                    src={image.url}
                    alt={image.prompt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-800 text-sm mb-3 line-clamp-2">
                    {image.prompt}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadImage(image.url, image.prompt)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaDownload />
                      Download
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <FaExpand />
                      Edit
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Production Notes */}
      <div className="mt-8 p-4 bg-blue-900/50 rounded-lg text-white text-sm">
        <strong>Production Implementation Notes:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Integrate OpenAI DALL-E 3 API or Azure OpenAI Service</li>
          <li>Add user authentication for credit tracking</li>
          <li>Implement payment system for premium subscriptions (Stripe)</li>
          <li>Add image editor with filters, text overlay, cropping (Canvas API)</li>
          <li>Store generated images in cloud storage (AWS S3, Azure Blob)</li>
          <li>Add image history and gallery for logged-in users</li>
          <li>Implement prompt enhancement suggestions</li>
          <li>Add negative prompts for better control</li>
          <li>Rate limiting and queue system for high traffic</li>
          <li>Add image upscaling feature (Real-ESRGAN)</li>
          <li>Social sharing features (Instagram, TikTok, Pinterest)</li>
        </ul>
      </div>
    </div>
  )
}
