/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  openapi: '3.1.0',
  info: {
    title: '@backstage/plugin-catalog-backend',
    version: '1',
    description:
      'The Backstage backend plugin that provides the Backstage catalog',
    license: {
      name: 'Apache-2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    contact: {},
  },
  servers: [
    {
      url: '/',
    },
  ],
  components: {
    examples: {},
    headers: {},
    parameters: {
      kind: {
        name: 'kind',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
      },
      namespace: {
        name: 'namespace',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
      },
      name: {
        name: 'name',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
      },
      uid: {
        name: 'uid',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
      },
      cursor: {
        name: 'cursor',
        in: 'query',
        description: 'Cursor to a set page of results.',
        required: false,
        schema: {
          type: 'string',
        },
      },
      fields: {
        name: 'fields',
        in: 'query',
        description: 'Restrict to just these fields in the response.',
        required: false,
        schema: {
          type: 'string',
        },
      },
      limit: {
        name: 'limit',
        in: 'query',
        description: 'Number of records to return in the response.',
        required: false,
        schema: {
          type: 'integer',
          minimum: 1,
        },
      },
      sortField: {
        name: 'sortField',
        in: 'query',
        description: 'The fields to sort returned results by.',
        required: false,
        schema: {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'A two-item tuple of [field, order].',
          },
        },
        explode: true,
        style: 'form',
      },
    },
    requestBodies: {},
    responses: {},
    schemas: {
      JsonObject: {
        type: 'object',
        properties: {},
        description: 'A type representing all allowed JSON object values.',
      },
      MapStringString: {
        type: 'object',
        properties: {},
        additionalProperties: {
          type: 'string',
        },
        description: 'Construct a type with a set of properties K of type T',
      },
      EntityLink: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description:
              'An optional value to categorize links into specific groups',
          },
          icon: {
            type: 'string',
            description:
              'An optional semantic key that represents a visual icon.',
          },
          title: {
            type: 'string',
            description: 'An optional descriptive title for the link.',
          },
          url: {
            type: 'string',
            description: 'The url to the external site, document, etc.',
          },
        },
        required: ['url'],
        description:
          'A link to external information that is related to the entity.',
        additionalProperties: false,
      },
      EntityMeta: {
        allOf: [
          {
            $ref: '#/components/schemas/JsonObject',
          },
          {
            type: 'object',
            properties: {
              links: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/EntityLink',
                },
                description:
                  'A list of external hyperlinks related to the entity.',
              },
              tags: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description:
                  'A list of single-valued strings, to for example classify catalog entities in\nvarious ways.',
              },
              annotations: {
                $ref: '#/components/schemas/MapStringString',
              },
              labels: {
                $ref: '#/components/schemas/MapStringString',
              },
              description: {
                type: 'string',
                description:
                  'A short (typically relatively few words, on one line) description of the\nentity.',
              },
              title: {
                type: 'string',
                description:
                  'A display name of the entity, to be presented in user interfaces instead\nof the `name` property above, when available.\nThis field is sometimes useful when the `name` is cumbersome or ends up\nbeing perceived as overly technical. The title generally does not have\nas stringent format requirements on it, so it may contain special\ncharacters and be more explanatory. Do keep it very short though, and\navoid situations where a title can be confused with the name of another\nentity, or where two entities share a title.\nNote that this is only for display purposes, and may be ignored by some\nparts of the code. Entity references still always make use of the `name`\nproperty, not the title.',
              },
              namespace: {
                type: 'string',
                description: 'The namespace that the entity belongs to.',
              },
              name: {
                type: 'string',
                description:
                  'The name of the entity.\nMust be unique within the catalog at any given point in time, for any\ngiven namespace + kind pair. This value is part of the technical\nidentifier of the entity, and as such it will appear in URLs, database\ntables, entity references, and similar. It is subject to restrictions\nregarding what characters are allowed.\nIf you want to use a different, more human readable string with fewer\nrestrictions on it in user interfaces, see the `title` field below.',
              },
              etag: {
                type: 'string',
                description:
                  'An opaque string that changes for each update operation to any part of\nthe entity, including metadata.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, and the server will then reject the\noperation if it does not match the current stored value.',
              },
              uid: {
                type: 'string',
                description:
                  'A globally unique ID for the entity.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, but the server is free to reject requests\nthat do so in such a way that it breaks semantics.',
              },
            },
            required: ['name'],
          },
        ],
        description: 'Metadata fields common to all versions/kinds of entity.',
        additionalProperties: false,
      },
      EntityRelation: {
        type: 'object',
        properties: {
          targetRef: {
            type: 'string',
            description: 'The entity ref of the target of this relation.',
          },
          type: {
            type: 'string',
            description: 'The type of the relation.',
          },
        },
        required: ['targetRef', 'type'],
        description:
          'A relation of a specific type to another entity in the catalog.',
        additionalProperties: false,
      },
      Entity: {
        type: 'object',
        properties: {
          relations: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/EntityRelation',
            },
            description:
              'The relations that this entity has with other entities.',
          },
          spec: {
            $ref: '#/components/schemas/JsonObject',
          },
          metadata: {
            $ref: '#/components/schemas/EntityMeta',
          },
          kind: {
            type: 'string',
            description: 'The high level entity type being described.',
          },
          apiVersion: {
            type: 'string',
            description:
              'The version of specification format for this particular entity that\nthis is written against.',
          },
        },
        required: ['metadata', 'kind', 'apiVersion'],
        description:
          "The parts of the format that's common to all versions/kinds of entity.",
        additionalProperties: false,
      },
      EntityAncestryResponse: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                parentEntityRefs: {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
                entity: {
                  $ref: '#/components/schemas/Entity',
                },
              },
              required: ['parentEntityRefs', 'entity'],
            },
          },
          rootEntityRef: {
            type: 'string',
          },
        },
        required: ['items', 'rootEntityRef'],
        additionalProperties: false,
      },
      EntitiesBatchResponse: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              allOf: [
                {
                  $ref: '#/components/schemas/Entity',
                },
              ],
              nullable: true,
            },
            description:
              'The list of entities, in the same order as the refs in the request. Entries\nthat are null signify that no entity existed with that ref.',
          },
        },
        required: ['items'],
        additionalProperties: false,
      },
      EntityFacet: {
        type: 'object',
        properties: {
          value: {
            type: 'string',
          },
          count: {
            type: 'number',
          },
        },
        additionalProperties: false,
      },
      EntityFacetsResponse: {
        type: 'object',
        properties: {
          facets: {
            type: 'object',
            additionalProperties: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/EntityFacet',
              },
            },
          },
        },
        required: ['facets'],
        additionalProperties: false,
      },
      Location: {
        type: 'object',
        properties: {
          target: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
        },
        required: ['target', 'type', 'id'],
        description: 'Entity location for a specific entity.',
        additionalProperties: false,
      },
      LocationSpec: {
        type: 'object',
        properties: {
          presence: {
            type: 'string',
            enum: ['optional', 'required'],
          },
          target: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
        },
        required: ['target', 'type'],
        description: 'Holds the entity location information.',
        additionalProperties: false,
      },
      AnalyzeLocationExistingEntity: {
        type: 'object',
        properties: {
          entity: {
            $ref: '#/components/schemas/Entity',
          },
          isRegistered: {
            type: 'boolean',
          },
          location: {
            $ref: '#/components/schemas/LocationSpec',
          },
        },
        required: ['entity', 'isRegistered', 'location'],
        description:
          "If the folder pointed to already contained catalog info yaml files, they are\nread and emitted like this so that the frontend can inform the user that it\nlocated them and can make sure to register them as well if they weren't\nalready",
        additionalProperties: false,
      },
      RecursivePartialEntityRelation: {
        type: 'object',
        properties: {
          targetRef: {
            type: 'string',
            description: 'The entity ref of the target of this relation.',
          },
          type: {
            type: 'string',
            description: 'The type of the relation.',
          },
        },
        description:
          'A relation of a specific type to another entity in the catalog.',
        additionalProperties: false,
      },
      RecursivePartialEntityMeta: {
        allOf: [
          {
            $ref: '#/components/schemas/JsonObject',
          },
          {
            type: 'object',
            properties: {
              links: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/EntityLink',
                },
                description:
                  'A list of external hyperlinks related to the entity.',
              },
              tags: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description:
                  'A list of single-valued strings, to for example classify catalog entities in\nvarious ways.',
              },
              annotations: {
                $ref: '#/components/schemas/MapStringString',
              },
              labels: {
                $ref: '#/components/schemas/MapStringString',
              },
              description: {
                type: 'string',
                description:
                  'A short (typically relatively few words, on one line) description of the\nentity.',
              },
              title: {
                type: 'string',
                description:
                  'A display name of the entity, to be presented in user interfaces instead\nof the `name` property above, when available.\nThis field is sometimes useful when the `name` is cumbersome or ends up\nbeing perceived as overly technical. The title generally does not have\nas stringent format requirements on it, so it may contain special\ncharacters and be more explanatory. Do keep it very short though, and\navoid situations where a title can be confused with the name of another\nentity, or where two entities share a title.\nNote that this is only for display purposes, and may be ignored by some\nparts of the code. Entity references still always make use of the `name`\nproperty, not the title.',
              },
              namespace: {
                type: 'string',
                description: 'The namespace that the entity belongs to.',
              },
              name: {
                type: 'string',
                description:
                  'The name of the entity.\nMust be unique within the catalog at any given point in time, for any\ngiven namespace + kind pair. This value is part of the technical\nidentifier of the entity, and as such it will appear in URLs, database\ntables, entity references, and similar. It is subject to restrictions\nregarding what characters are allowed.\nIf you want to use a different, more human readable string with fewer\nrestrictions on it in user interfaces, see the `title` field below.',
              },
              etag: {
                type: 'string',
                description:
                  'An opaque string that changes for each update operation to any part of\nthe entity, including metadata.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, and the server will then reject the\noperation if it does not match the current stored value.',
              },
              uid: {
                type: 'string',
                description:
                  'A globally unique ID for the entity.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, but the server is free to reject requests\nthat do so in such a way that it breaks semantics.',
              },
            },
            description:
              'Metadata fields common to all versions/kinds of entity.',
          },
        ],
        additionalProperties: false,
      },
      RecursivePartialEntity: {
        type: 'object',
        properties: {
          apiVersion: {
            type: 'string',
            description:
              'The version of specification format for this particular entity that\nthis is written against.',
          },
          kind: {
            type: 'string',
            description: 'The high level entity type being described.',
          },
          metadata: {
            $ref: '#/components/schemas/RecursivePartialEntityMeta',
          },
          spec: {
            $ref: '#/components/schemas/JsonObject',
          },
          relations: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/RecursivePartialEntityRelation',
            },
            description:
              'The relations that this entity has with other entities.',
          },
        },
        description: 'Makes all keys of an entire hierarchy optional.',
        additionalProperties: false,
      },
      AnalyzeLocationEntityField: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description:
              'A text to show to the user to inform about the choices made. Like, it could say\n"Found a CODEOWNERS file that covers this target, so we suggest leaving this\nfield empty; which would currently make it owned by X" where X is taken from the\ncodeowners file.',
          },
          value: {
            type: 'string',
            nullable: true,
          },
          state: {
            type: 'string',
            enum: [
              'analysisSuggestedValue',
              'analysisSuggestedNoValue',
              'needsUserInput',
            ],
            description:
              'The outcome of the analysis for this particular field',
          },
          field: {
            type: 'string',
            description:
              'e.g. "spec.owner"? The frontend needs to know how to "inject" the field into the\nentity again if the user wants to change it',
          },
        },
        required: ['description', 'value', 'state', 'field'],
        additionalProperties: false,
      },
      AnalyzeLocationGenerateEntity: {
        type: 'object',
        properties: {
          fields: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/AnalyzeLocationEntityField',
            },
          },
          entity: {
            $ref: '#/components/schemas/RecursivePartialEntity',
          },
        },
        required: ['fields', 'entity'],
        description:
          "This is some form of representation of what the analyzer could deduce.\nWe should probably have a chat about how this can best be conveyed to\nthe frontend. It'll probably contain a (possibly incomplete) entity, plus\nenough info for the frontend to know what form data to show to the user\nfor overriding/completing the info.",
        additionalProperties: false,
      },
      AnalyzeLocationResponse: {
        type: 'object',
        properties: {
          generateEntities: {
            items: {
              $ref: '#/components/schemas/AnalyzeLocationGenerateEntity',
            },
            type: 'array',
          },
          existingEntityFiles: {
            items: {
              $ref: '#/components/schemas/AnalyzeLocationExistingEntity',
            },
            type: 'array',
          },
        },
        required: ['generateEntities', 'existingEntityFiles'],
        additionalProperties: false,
      },
      LocationInput: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
          },
          target: {
            type: 'string',
          },
          presence: {
            type: 'string',
            enum: ['optional', 'required'],
          },
        },
        required: ['type', 'target', 'presence'],
        additionalProperties: false,
      },
      SerializedError: {
        allOf: [
          {
            $ref: '#/components/schemas/JsonObject',
          },
          {
            type: 'object',
            properties: {
              code: {
                type: 'string',
                description:
                  'A custom code (not necessarily the same as an HTTP response code); may not be present',
              },
              stack: {
                type: 'string',
                description: 'A stringified stack trace; may not be present',
              },
              message: {
                type: 'string',
                description: 'The message of the exception that was thrown',
              },
              name: {
                type: 'string',
                description: 'The name of the exception that was thrown',
              },
            },
            required: ['message', 'name'],
          },
        ],
        description: 'The serialized form of an Error.',
        additionalProperties: false,
      },
      EntitiesQueryResponse: {
        type: 'object',
        properties: {
          items: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Entity',
            },
            description: 'The list of entities paginated by a specific filter.',
          },
          totalItems: {
            type: 'number',
          },
          pageInfo: {
            type: 'object',
            properties: {
              nextCursor: {
                type: 'string',
                description: 'The cursor for the next batch of entities.',
              },
              prevCursor: {
                type: 'string',
                description: 'The cursor for the previous batch of entities.',
              },
            },
          },
        },
        additionalProperties: false,
      },
    },
    securitySchemes: {
      JWT: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: {
    '/refresh': {
      post: {
        operationId: 'RefreshEntity',
        responses: {
          '200': {
            description: 'Refreshed',
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  authorizationToken: {
                    type: 'string',
                  },
                  entityRef: {
                    type: 'string',
                    description:
                      'The reference to a single entity that should be refreshed',
                  },
                },
                required: ['entityRef'],
                description:
                  'Options for requesting a refresh of entities in the catalog.',
                additionalProperties: false,
              },
            },
          },
        },
      },
    },
    '/entities': {
      get: {
        operationId: 'GetEntities',
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Entity',
                  },
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'after',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/entities/by-uid/{uid}': {
      get: {
        operationId: 'GetEntityByUid',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Entity',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            $ref: '#/components/parameters/uid',
          },
        ],
      },
      delete: {
        operationId: 'DeleteEntityByUid',
        responses: {
          '204': {
            description: 'Deleted successfully.',
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'uid',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/entities/by-name/{kind}/{namespace}/{name}': {
      get: {
        operationId: 'GetEntityByName',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Entity',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            $ref: '#/components/parameters/kind',
          },
          {
            $ref: '#/components/parameters/namespace',
          },
          {
            $ref: '#/components/parameters/name',
          },
        ],
      },
    },
    '/entities/by-name/{kind}/{namespace}/{name}/ancestry': {
      get: {
        operationId: 'GetEntityAncestryByName',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/EntityAncestryResponse',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            $ref: '#/components/parameters/kind',
          },
          {
            $ref: '#/components/parameters/namespace',
          },
          {
            $ref: '#/components/parameters/name',
          },
        ],
      },
    },
    '/entities/by-refs': {
      post: {
        operationId: 'GetEntitiesByRefs',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/EntitiesBatchResponse',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['entityRefs'],
                properties: {
                  entityRefs: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  fields: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/entities/by-query': {
      get: {
        operationId: 'GetEntitiesByQuery',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/EntitiesQueryResponse',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            $ref: '#/components/parameters/fields',
          },
          {
            $ref: '#/components/parameters/limit',
          },
          {
            $ref: '#/components/parameters/sortField',
          },
          {
            $ref: '#/components/parameters/cursor',
          },
          {
            name: 'fullTextFilterTerm',
            in: 'query',
            description: 'Text search term.',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'fullTextFilterFields',
            in: 'query',
            description:
              'A comma separated list of fields to sort returned results by.',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            explode: false,
            style: 'form',
          },
        ],
      },
    },
    '/entity-facets': {
      get: {
        operationId: 'GetEntityFacets',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/EntityFacetsResponse',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'query',
            name: 'facet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/locations': {
      post: {
        operationId: 'CreateLocation',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    exists: {
                      type: 'boolean',
                    },
                    entities: {
                      items: {
                        $ref: '#/components/schemas/Entity',
                      },
                      type: 'array',
                    },
                    location: {
                      $ref: '#/components/schemas/Location',
                    },
                  },
                  required: ['entities', 'location'],
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'query',
            name: 'dryRun',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  presence: {
                    type: 'string',
                    enum: ['required', 'optional'],
                  },
                  target: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
                  },
                },
                required: ['presence', 'target', 'type'],
              },
            },
          },
        },
      },
      get: {
        operationId: 'GetLocations',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      data: {
                        $ref: '#/components/schemas/Location',
                      },
                    },
                    required: ['data'],
                  },
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [],
      },
    },
    '/locations/{id}': {
      get: {
        operationId: 'GetLocation',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Location',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
      },
      delete: {
        operationId: 'DeleteLocation',
        responses: {
          '204': {
            description: 'No content',
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
      },
    },
    '/analyze-location': {
      post: {
        operationId: 'AnalyzeLocation',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/AnalyzeLocationResponse',
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  catalogFileName: {
                    type: 'string',
                  },
                  location: {
                    $ref: '#/components/schemas/LocationInput',
                  },
                },
                required: ['catalogFileName', 'location'],
              },
            },
          },
        },
      },
    },
    '/validate-entity': {
      post: {
        operationId: 'ValidateEntity',
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        errors: {
                          $ref: '#/components/schemas/SerializedError',
                        },
                      },
                      required: ['errors'],
                    },
                    {
                      type: 'object',
                      properties: {
                        errors: {
                          type: 'array',
                          items: {
                            $ref: '#/components/schemas/SerializedError',
                          },
                        },
                      },
                      required: ['errors'],
                    },
                  ],
                },
              },
            },
          },
        },
        security: [
          {},
          {
            JWT: [],
          },
        ],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  location: {
                    type: 'string',
                  },
                  entity: {
                    $ref: '#/components/schemas/Entity',
                  },
                },
                required: ['location', 'entity'],
              },
            },
          },
        },
      },
    },
  },
} as const;
