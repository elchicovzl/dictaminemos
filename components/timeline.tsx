"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle } from "lucide-react"

interface TimelineItem {
    year: string
    title: string
    description: string
}

interface TimelineProps {
    items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative container mx-auto px-4 py-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2" />

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Content Side */}
                        <div className="flex-1 md:w-1/2">
                            <div
                                className={`bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow relative ${index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                    }`}
                            >
                                <div
                                    className={`flex items-center gap-2 text-blue-600 font-bold text-xl mb-2 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                                        }`}
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>{item.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>

                                {/* Arrow */}
                                <div
                                    className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-blue-100 transform rotate-45 ${index % 2 === 0 ? "-left-2.5 bg-white border-l border-b border-blue-100 rotate-45" : "-right-2.5 bg-white border-r border-t border-blue-100 rotate-45"
                                        }`}
                                    style={index % 2 === 0 ? { borderRight: 'none', borderTop: 'none' } : { borderLeft: 'none', borderBottom: 'none' }}
                                />
                            </div>
                        </div>

                        {/* Center Node */}
                        <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10 transform -translate-x-1/2 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                        </div>

                        {/* Empty Spacer Side */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
