export const modelMetricsSchema = Object.freeze({
  type: 'object',
  properties: {
    meshes: { type: 'number', minimum: 0 },
    bodies: { type: 'number', minimum: 0 },
    materials: { type: 'number', minimum: 0 },
    textures: { type: 'number', minimum: 0 },
    triangles: { type: 'number', minimum: 0 },
    entities: { type: 'number', minimum: 0 },
  },
  additionalProperties: false,
  required: [
    'meshes',
    'bodies',
    'materials',
    'textures',
    'triangles',
    'entities',
  ],
})

export const animationMetricsSchema = Object.freeze({
  type: 'object',
  properties: {
    sequences: { type: 'number', minimum: 1 },
    duration: { type: 'number', minimum: 0 },
    frames: { type: 'number', minimum: 0 },
    fps: { type: 'number', minimum: 0 },
  },
  additionalProperties: false,
  required: ['sequences', 'duration', 'frames', 'fps'],
})
