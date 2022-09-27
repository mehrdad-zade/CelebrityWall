import React from 'react'

export type Celebrity = {
  id: string
  name: string
  imageUrl: string
  status: 'GOOD' | 'BAD' | 'UGLY'
}

export const Card = ({ celebrity }: { celebrity: Celebrity }) => {
  const { id, name, imageUrl, status } = celebrity
  return (
    <div
      className="shadow rounded-md w-64 m-2 overflow-hidden group"
      key={id}
      // onClick={() => {}}
      onContextMenu={() => {}}
    >
      <div className="relative">
        {status === 'GOOD' && (
          <div className="absolute inset-0 opacity-40 bg-green-500 group-hover:hidden" />
        )}
        <img src={imageUrl} alt={name} className="w-full" />
      </div>
      <div className="p-5">{name}</div>
    </div>
  )
}
