type varint = never;
type varlong = never;
type optvarint = number;
type pstring = never;
type buffer = never;
type u8 = never;
type u16 = never;
type u32 = never;
type u64 = never;
type i8 = never;
type i16 = never;
type i32 = never;
type i64 = never;
type bool = never;
type f32 = never;
type f64 = never;
type UUID = never;
type option = never;
type entityMetadataLoop = never;
type topBitSetTerminatedArray = never;
type bitfield = never;
type container = never;
type array = never;
type restBuffer = never;
type anonymousNbt = never;
type anonOptionalNbt = never;
type arrayWithLengthOffset = never;
type ByteArray = never;
type vec2f = {
  x: number;
  y: number;
};
type vec3f = {
  x: number;
  y: number;
  z: number;
};
type vec4f = {
  x: number;
  y: number;
  z: number;
  w: number;
};
type vec3f64 = {
  x: number;
  y: number;
  z: number;
};
type SlotComponentType =
  | "custom_data"
  | "max_stack_size"
  | "max_damage"
  | "damage"
  | "unbreakable"
  | "custom_name"
  | "item_name"
  | "lore"
  | "rarity"
  | "enchantments"
  | "can_place_on"
  | "can_break"
  | "attribute_modifiers"
  | "custom_model_data"
  | "hide_additional_tooltip"
  | "hide_tooltip"
  | "repair_cost"
  | "creative_slot_lock"
  | "enchantment_glint_override"
  | "intangible_projectile"
  | "food"
  | "fire_resistant"
  | "tool"
  | "stored_enchantments"
  | "dyed_color"
  | "map_color"
  | "map_id"
  | "map_decorations"
  | "map_post_processing"
  | "charged_projectiles"
  | "bundle_contents"
  | "potion_contents"
  | "suspicious_stew_effects"
  | "writable_book_content"
  | "written_book_content"
  | "trim"
  | "debug_stick_state"
  | "entity_data"
  | "bucket_entity_data"
  | "block_entity_data"
  | "instrument"
  | "ominous_bottle_amplifier"
  | "jukebox_playable"
  | "recipes"
  | "lodestone_tracker"
  | "firework_explosion"
  | "fireworks"
  | "profile"
  | "note_block_sound"
  | "banner_patterns"
  | "base_color"
  | "pot_decorations"
  | "container"
  | "block_state"
  | "bees"
  | "lock"
  | "container_loot";
type SlotComponent = {
  data: /* custom_data */
  | never
    | /* max_stack_size */ number
    | /* max_damage */ number
    | /* damage */ number
    | /* unbreakable */ boolean
    | /* custom_name */ never
    | /* item_name */ never
    | /* lore */ anonOptionalNbt[]
    | /* rarity */ number
    | /* enchantments */ {
        showTooltip: boolean;
        enchantments: {
          level: number;
          type: SlotComponentType;
          id: number;
        }[];
      }
    | /* can_place_on */ {
        showTooltip: boolean;
        predicates: BlockPredicate[];
      }
    | /* can_break */ {
        showTooltip: boolean;
        predicates: BlockPredicate[];
      }
    | /* attribute_modifiers */ {
        attributes: {
          name: string;
          typeId: number;
          value: number;
          operation: "add" | "multiply_base" | "multiply_total";
          slot:
            | "any"
            | "main_hand"
            | "off_hand"
            | "hand"
            | "feet"
            | "legs"
            | "chest"
            | "head"
            | "armor"
            | "body";
          uniqueId: string;
        }[];
        showTooltip: boolean;
      }
    | /* custom_model_data */ number
    | /* hide_additional_tooltip */ never
    | /* hide_tooltip */ never
    | /* repair_cost */ number
    | /* creative_slot_lock */ never
    | /* enchantment_glint_override */ boolean
    | /* intangible_projectile */ never
    | /* food */ {
        effects: {
          canAlwaysEat: boolean;
          saturationModifier: number;
          effect: number;
          usingConvertsTo: Slot;
          secondsToEat: number;
          probability: number;
          nutrition: number;
        }[];
      }
    | /* fire_resistant */ never
    | /* tool */ {
        rules: {
          correctDropForBlocks: boolean;
          speed: number;
          hasCorrectDropForBlocks: boolean;
          blocks: BlockSet[];
          hasSpeed: boolean;
        }[];
        damagePerBlock: number;
        defaultMiningSpeed: number;
      }
    | /* stored_enchantments */ {
        enchantments: {
          level: number;
          id: number;
        }[];
        showInTooltip: boolean;
      }
    | /* dyed_color */ {
        color: number;
        showTooltip: boolean;
      }
    | /* map_color */ number
    | /* map_id */ number
    | /* map_decorations */ anonOptionalNbt
    | /* map_post_processing */ number
    | /* charged_projectiles */ {
        projectiles: Slot[];
      }
    | /* bundle_contents */ {
        contents: Slot[];
      }
    | /* potion_contents */ {
        customEffects: {
          effect: number;
          customColor: optvarint;
          potionId: optvarint;
          details: EffectDetail;
          hasPotionId: boolean;
          hasCustomColor: boolean;
        }[];
      }
    | /* suspicious_stew_effects */ {
        effects: {
          duration: number;
          effect: number;
        }[];
      }
    | /* writable_book_content */ {
        pages: BookPage[];
      }
    | /* written_book_content */ {
        resolved: boolean;
        generation: number;
        author: string;
        filteredTitle: string | undefined;
        rawTitle: string;
        pages: BookPage[];
      }
    | /* trim */ {
        showInTooltip: boolean;
      }
    | /* debug_stick_state */ never
    | /* entity_data */ never
    | /* bucket_entity_data */ never
    | /* block_entity_data */ never
    | /* instrument */ {}
    | /* ominous_bottle_amplifier */ number
    | /* jukebox_playable */ {
        showInTooltip: boolean;
      }
    | /* recipes */ never
    | /* lodestone_tracker */ {
        tracked: boolean;
        globalPosition:
          | {
              position: vec3f;
              dimension: string;
            }
          | undefined;
      }
    | /* firework_explosion */ FireworkExplosion
    | /* fireworks */ {
        flightDuration: number;
        explosions: FireworkExplosion[];
      }
    | /* profile */ {
        properties: {
          name: string;
          value: string;
          hasName: boolean;
          property: string;
          signature: string;
          hasSignature: boolean;
          hasUniqueId: boolean;
          uniqueId: string;
        }[];
      }
    | /* note_block_sound */ string
    | /* banner_patterns */ {
        layers: {
          color: number;
        }[];
      }
    | /* base_color */ number
    | /* pot_decorations */ {
        decorations: number[];
      }
    | /* container */ {
        contents: Slot[];
      }
    | /* block_state */ {
        properties: {
          value: string;
          property: string;
        }[];
      }
    | /* bees */ {
        bees: {
          nbtData: never;
          minTicksInHive: number;
          ticksInHive: number;
        }[];
      }
    | /* lock */ never
    | /* container_loot */ never;
};
type Slot = {
  itemCount: number;
};
type FireworkExplosion = {
  colors: number[];
  hasTwinkle: boolean;
  shape: "small_ball" | "large_ball" | "star" | "creeper" | "burst";
  fadeColors: number[];
  hasTrail: boolean;
};
type BookPage = {
  content: string;
  filteredContent: string | undefined;
};
type EffectDetail = {
  amplifier: number;
  showIcon: boolean;
  ambient: boolean;
  duration: number;
  hiddenEffect: EffectDetail | undefined;
  showParticles: boolean;
};
type BlockSet = {
  name: /* 0 */ string | never;
  blockIds: /* 0 */ never | never;
  type: number;
};
type BlockProperty = {
  name: string;
  exactValue: string | undefined;
  minValue: string | undefined;
  isExactMatch: boolean;
  maxValue: string | undefined;
};
type BlockPredicate = {
  blockSet: BlockSet[] | undefined;
  nbt: anonOptionalNbt;
  properties: BlockProperty[] | undefined;
};
type Particle = {
  data: /* block */
  | number
    | /* block_marker */ number
    | /* falling_dust */ number
    | /* dust_pillar */ number
    | /* dust */ {
        green: number;
        type:
          | "angry_villager"
          | "block"
          | "block_marker"
          | "bubble"
          | "cloud"
          | "crit"
          | "damage_indicator"
          | "dragon_breath"
          | "dripping_lava"
          | "falling_lava"
          | "landing_lava"
          | "dripping_water"
          | "falling_water"
          | "dust"
          | "dust_color_transition"
          | "effect"
          | "elder_guardian"
          | "enchanted_hit"
          | "enchant"
          | "end_rod"
          | "entity_effect"
          | "explosion_emitter"
          | "explosion"
          | "gust"
          | "small_gust"
          | "gust_emitter_large"
          | "gust_emitter_small"
          | "sonic_boom"
          | "falling_dust"
          | "firework"
          | "fishing"
          | "flame"
          | "infested"
          | "cherry_leaves"
          | "sculk_soul"
          | "sculk_charge"
          | "sculk_charge_pop"
          | "soul_fire_flame"
          | "soul"
          | "flash"
          | "happy_villager"
          | "composter"
          | "heart"
          | "instant_effect"
          | "item"
          | "vibration"
          | "item_slime"
          | "item_cobweb"
          | "item_snowball"
          | "large_smoke"
          | "lava"
          | "mycelium"
          | "note"
          | "poof"
          | "portal"
          | "rain"
          | "smoke"
          | "white_smoke"
          | "sneeze"
          | "spit"
          | "squid_ink"
          | "sweep_attack"
          | "totem_of_undying"
          | "underwater"
          | "splash"
          | "witch"
          | "bubble_pop"
          | "current_down"
          | "bubble_column_up"
          | "nautilus"
          | "dolphin"
          | "campfire_cosy_smoke"
          | "campfire_signal_smoke"
          | "dripping_honey"
          | "falling_honey"
          | "landing_honey"
          | "falling_nectar"
          | "falling_spore_blossom"
          | "ash"
          | "crimson_spore"
          | "warped_spore"
          | "spore_blossom_air"
          | "dripping_obsidian_tear"
          | "falling_obsidian_tear"
          | "landing_obsidian_tear"
          | "reverse_portal"
          | "white_ash"
          | "small_flame"
          | "snowflake"
          | "dripping_dripstone_lava"
          | "falling_dripstone_lava"
          | "dripping_dripstone_water"
          | "falling_dripstone_water"
          | "glow_squid_ink"
          | "glow"
          | "wax_on"
          | "wax_off"
          | "electric_spark"
          | "scrape"
          | "shriek"
          | "egg_crack"
          | "dust_plume"
          | "trial_spawner_detected_player"
          | "trial_spawner_detected_player_ominous"
          | "vault_connection"
          | "dust_pillar"
          | "ominous_spawning"
          | "raid_omen"
          | "trial_omen";
        red: number;
        scale: number;
        blue: number;
      }
    | /* dust_color_transition */ {
        fromBlue: number;
        fromGreen: number;
        fromRed: number;
        toBlue: number;
        scale: number;
        toGreen: number;
        toRed: number;
      }
    | /* entity_effect */ number
    | /* item */ Slot
    | /* sculk_charge */ number
    | /* shriek */ number
    | /* vibration */ {
        ticks: number;
        position: /* block */
        | never
          | /* entity */ {
              entity_eye_height: number;
              position_type: "block" | "entity";
              entityId: number;
            };
      };
};
type ingredient = Slot[];
type position = {
  x: number | boolean;
  z: number | boolean;
  y: number | boolean;
};
type soundSource =
  | "master"
  | "music"
  | "record"
  | "weather"
  | "block"
  | "hostile"
  | "neutral"
  | "player"
  | "ambient"
  | "voice";
type packedChunkPos = {
  x: number;
  z: number;
};
type previousMessages = {
  signature: /* 0 */ never | never;
  id: number;
}[];
type entityMetadataEntry = {
  value: /* byte */
  | number
    | /* int */ number
    | /* long */ number
    | /* float */ number
    | /* string */ string
    | /* component */ never
    | /* optional_component */ (never | undefined)
    | /* item_stack */ Slot
    | /* boolean */ boolean
    | /* rotations */ {
        key: number;
        roll: number;
        type:
          | "byte"
          | "int"
          | "long"
          | "float"
          | "string"
          | "component"
          | "optional_component"
          | "item_stack"
          | "boolean"
          | "rotations"
          | "block_pos"
          | "optional_block_pos"
          | "direction"
          | "optional_uuid"
          | "block_state"
          | "optional_block_state"
          | "compound_tag"
          | "particle"
          | "particles"
          | "villager_data"
          | "optional_unsigned_int"
          | "pose"
          | "cat_variant"
          | "wolf_variant"
          | "frog_variant"
          | "optional_global_pos"
          | "painting_variant"
          | "sniffer_state"
          | "armadillo_state"
          | "vector3"
          | "quaternion";
        pitch: number;
        yaw: number;
      }
    | /* block_pos */ never
    | /* optional_block_pos */ (never | undefined)
    | /* direction */ number
    | /* optional_uuid */ (string | undefined)
    | /* block_state */ number
    | /* optional_block_state */ optvarint
    | /* compound_tag */ never
    | /* particle */ Particle
    | /* particles */ Particle[]
    | /* villager_data */ {
        villagerProfession: number;
        villagerType: number;
        level: number;
      }
    | /* optional_unsigned_int */ optvarint
    | /* pose */ number
    | /* cat_variant */ number
    | /* wolf_variant */ {
        biomeHolders: /* 0 */ never | never;
        wildTexture: string;
        maybeInputLength: number;
        tameTexture: string;
        angryTexture: string;
        biomeLocation: /* 0 */ string;
      }
    | /* frog_variant */ number
    | /* optional_global_pos */ (string | undefined)
    | /* painting_variant */ {
        width: number;
        assetId: string;
        height: number;
      }
    | /* sniffer_state */ number
    | /* armadillo_state */ number
    | /* vector3 */ vec3f
    | /* quaternion */ vec4f;
};
type entityMetadata = never;
type minecraft_simple_recipe_format = {
  category: number;
};
type minecraft_smelting_format = {
  category: number;
  ingredient: ingredient;
  result: Slot;
  cookTime: number;
  group: string;
  experience: number;
};
type tags = {
  entries: number[];
  tagName: string;
}[];
type chunkBlockEntity = {
  nbtData: anonOptionalNbt;
  type: number;
  x: number;
  z: number;
  y: number;
};
type chat_session =
  | {
      publicKey: {
        expireTime: number;
        uuid: string;
        keySignature: never;
        keyBytes: never;
      };
    }
  | undefined;
type game_profile = {
  properties: {
    name: string;
    value: string;
    key: string;
    signature: string | undefined;
  }[];
};
type command_node = {
  extraNodeData: /* 0 */
  | never
    | /* 1 */ {
        name: string;
        children: number[];
        redirectNode: /* 1 */ number | never;
        flags: {
          unused: number | boolean;
          has_custom_suggestions: number | boolean;
          has_redirect_node: number | boolean;
          has_command: number | boolean;
          command_node_type: number | boolean;
        };
      }
    | /* 2 */ {
        suggestionType: /* 1 */ string | never;
        properties: /* brigadier:bool */
        | never
          | /* brigadier:float */ {
              name: string;
              parser:
                | "brigadier:bool"
                | "brigadier:float"
                | "brigadier:double"
                | "brigadier:integer"
                | "brigadier:long"
                | "brigadier:string"
                | "minecraft:entity"
                | "minecraft:game_profile"
                | "minecraft:block_pos"
                | "minecraft:column_pos"
                | "minecraft:vec3"
                | "minecraft:vec2"
                | "minecraft:block_state"
                | "minecraft:block_predicate"
                | "minecraft:item_stack"
                | "minecraft:item_predicate"
                | "minecraft:color"
                | "minecraft:component"
                | "minecraft:style"
                | "minecraft:message"
                | "minecraft:nbt"
                | "minecraft:nbt_tag"
                | "minecraft:nbt_path"
                | "minecraft:objective"
                | "minecraft:objective_criteria"
                | "minecraft:operation"
                | "minecraft:particle"
                | "minecraft:angle"
                | "minecraft:rotation"
                | "minecraft:scoreboard_slot"
                | "minecraft:score_holder"
                | "minecraft:swizzle"
                | "minecraft:team"
                | "minecraft:item_slot"
                | "minecraft:item_slots"
                | "minecraft:resource_location"
                | "minecraft:function"
                | "minecraft:entity_anchor"
                | "minecraft:int_range"
                | "minecraft:float_range"
                | "minecraft:dimension"
                | "minecraft:gamemode"
                | "minecraft:time"
                | "minecraft:resource_or_tag"
                | "minecraft:resource_or_tag_key"
                | "minecraft:resource"
                | "minecraft:resource_key"
                | "minecraft:template_mirror"
                | "minecraft:template_rotation"
                | "minecraft:heightmap"
                | "minecraft:loot_table"
                | "minecraft:loot_predicate"
                | "minecraft:loot_modifier"
                | "minecraft:uuid";
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ number | never;
              max: /* 1 */ number | never;
            }
          | /* brigadier:double */ {
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ number | never;
              max: /* 1 */ number | never;
            }
          | /* brigadier:integer */ {
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ number | never;
              max: /* 1 */ number | never;
            }
          | /* brigadier:long */ {
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ number | never;
              max: /* 1 */ number | never;
            }
          | /* brigadier:string */ "SINGLE_WORD"
          | "QUOTABLE_PHRASE"
          | "GREEDY_PHRASE"
          | /* minecraft:entity */ {
              unused: number | boolean;
              onlyAllowPlayers: number | boolean;
              onlyAllowEntities: number | boolean;
            }
          | /* minecraft:game_profile */ never
          | /* minecraft:block_pos */ never
          | /* minecraft:column_pos */ never
          | /* minecraft:vec3 */ never
          | /* minecraft:vec2 */ never
          | /* minecraft:block_state */ never
          | /* minecraft:block_predicate */ never
          | /* minecraft:item_stack */ never
          | /* minecraft:item_predicate */ never
          | /* minecraft:color */ never
          | /* minecraft:component */ never
          | /* minecraft:message */ never
          | /* minecraft:nbt */ never
          | /* minecraft:nbt_path */ never
          | /* minecraft:objective */ never
          | /* minecraft:objective_criteria */ never
          | /* minecraft:operation */ never
          | /* minecraft:particle */ never
          | /* minecraft:angle */ never
          | /* minecraft:rotation */ never
          | /* minecraft:scoreboard_slot */ never
          | /* minecraft:score_holder */ {
              unused: number | boolean;
              allowMultiple: number | boolean;
            }
          | /* minecraft:swizzle */ never
          | /* minecraft:team */ never
          | /* minecraft:item_slot */ never
          | /* minecraft:resource_location */ never
          | /* minecraft:function */ never
          | /* minecraft:entity_anchor */ never
          | /* minecraft:int_range */ never
          | /* minecraft:float_range */ never
          | /* minecraft:dimension */ never
          | /* minecraft:gamemode */ never
          | /* minecraft:time */ {
              min: number;
            }
          | /* minecraft:resource_or_tag */ {
              registry: string;
            }
          | /* minecraft:resource_or_tag_key */ {
              registry: string;
            }
          | /* minecraft:resource */ {
              registry: string;
            }
          | /* minecraft:resource_key */ {
              registry: string;
            }
          | /* minecraft:template_mirror */ never
          | /* minecraft:template_rotation */ never
          | /* minecraft:heightmap */ never
          | /* minecraft:uuid */ never;
      };
};
type packet_common_cookie_request = {
  cookie: string;
};
type packet_common_store_cookie = {
  value: ByteArray;
  key: string;
};
type packet_common_transfer = {
  port: number;
  host: string;
};
type packet_common_cookie_response = {
  value: ByteArray;
  key: string;
};
type packet_common_select_known_packs = {
  packs: {
    namespace: string;
    version: string;
    id: string;
  }[];
};
type packet_common_custom_report_details = {
  details: {
    value: string;
    key: string;
  }[];
};
type ServerLinkType =
  | "bug_report"
  | "community_guidelines"
  | "support"
  | "status"
  | "feedback"
  | "community"
  | "website"
  | "forums"
  | "news"
  | "announcements";
type packet_common_server_links = {
  links: {
    hasKnownType: boolean;
    knownType: /* true */ ServerLinkType;
    unknownType: /* false */ never;
    link: string;
  }[];
};

type Packet =
  | handshaking_toclient_packet
  | handshaking_toserver_packet_set_protocol
  | handshaking_toserver_packet_legacy_server_list_ping
  | handshaking_toserver_packet
  | status_toclient_packet_server_info
  | status_toclient_packet_ping
  | status_toclient_packet
  | status_toserver_packet_ping_start
  | status_toserver_packet_ping
  | status_toserver_packet
  | login_toclient_packet_disconnect
  | login_toclient_packet_encryption_begin
  | login_toclient_packet_success
  | login_toclient_packet_compress
  | login_toclient_packet_login_plugin_request
  | login_toclient_packet
  | login_toserver_packet_login_start
  | login_toserver_packet_encryption_begin
  | login_toserver_packet_login_plugin_response
  | login_toserver_packet_login_acknowledged
  | login_toserver_packet
  | configuration_toclient_packet_custom_payload
  | configuration_toclient_packet_disconnect
  | configuration_toclient_packet_finish_configuration
  | configuration_toclient_packet_keep_alive
  | configuration_toclient_packet_ping
  | configuration_toclient_packet_reset_chat
  | configuration_toclient_packet_registry_data
  | configuration_toclient_packet_remove_resource_pack
  | configuration_toclient_packet_add_resource_pack
  | configuration_toclient_packet_feature_flags
  | configuration_toclient_packet_tags
  | configuration_toclient_packet
  | configuration_toserver_packet_settings
  | configuration_toserver_packet_custom_payload
  | configuration_toserver_packet_finish_configuration
  | configuration_toserver_packet_keep_alive
  | configuration_toserver_packet_pong
  | configuration_toserver_packet_resource_pack_receive
  | configuration_toserver_packet
  | play_toclient_SpawnInfo
  | play_toclient_packet_spawn_entity
  | play_toclient_packet_spawn_entity_experience_orb
  | play_toclient_packet_animation
  | play_toclient_packet_statistics
  | play_toclient_packet_acknowledge_player_digging
  | play_toclient_packet_block_break_animation
  | play_toclient_packet_tile_entity_data
  | play_toclient_packet_block_action
  | play_toclient_packet_block_change
  | play_toclient_packet_boss_bar
  | play_toclient_packet_difficulty
  | play_toclient_packet_chunk_batch_finished
  | play_toclient_packet_chunk_batch_start
  | play_toclient_packet_chunk_biomes
  | play_toclient_packet_clear_titles
  | play_toclient_packet_tab_complete
  | play_toclient_packet_declare_commands
  | play_toclient_packet_close_window
  | play_toclient_packet_window_items
  | play_toclient_packet_craft_progress_bar
  | play_toclient_packet_set_slot
  | play_toclient_packet_set_cooldown
  | play_toclient_packet_chat_suggestions
  | play_toclient_packet_custom_payload
  | play_toclient_packet_damage_event
  | play_toclient_packet_debug_sample
  | play_toclient_packet_hide_message
  | play_toclient_packet_kick_disconnect
  | play_toclient_ChatTypeParameterType
  | play_toclient_ChatType
  | play_toclient_ChatTypes
  | play_toclient_packet_profileless_chat
  | play_toclient_packet_entity_status
  | play_toclient_packet_explosion
  | play_toclient_packet_unload_chunk
  | play_toclient_packet_game_state_change
  | play_toclient_packet_open_horse_window
  | play_toclient_packet_hurt_animation
  | play_toclient_packet_initialize_world_border
  | play_toclient_packet_keep_alive
  | play_toclient_packet_map_chunk
  | play_toclient_packet_world_event
  | play_toclient_packet_world_particles
  | play_toclient_packet_update_light
  | play_toclient_packet_login
  | play_toclient_packet_map
  | play_toclient_packet_trade_list
  | play_toclient_packet_rel_entity_move
  | play_toclient_packet_entity_move_look
  | play_toclient_packet_entity_look
  | play_toclient_packet_vehicle_move
  | play_toclient_packet_open_book
  | play_toclient_packet_open_window
  | play_toclient_packet_open_sign_entity
  | play_toclient_packet_ping
  | play_toclient_packet_ping_response
  | play_toclient_packet_craft_recipe_response
  | play_toclient_packet_abilities
  | play_toclient_packet_player_chat
  | play_toclient_packet_end_combat_event
  | play_toclient_packet_enter_combat_event
  | play_toclient_packet_death_combat_event
  | play_toclient_packet_player_remove
  | play_toclient_packet_player_info
  | play_toclient_packet_face_player
  | play_toclient_packet_position
  | play_toclient_packet_unlock_recipes
  | play_toclient_packet_entity_destroy
  | play_toclient_packet_remove_entity_effect
  | play_toclient_packet_reset_score
  | play_toclient_packet_remove_resource_pack
  | play_toclient_packet_add_resource_pack
  | play_toclient_packet_respawn
  | play_toclient_packet_entity_head_rotation
  | play_toclient_packet_multi_block_change
  | play_toclient_packet_select_advancement_tab
  | play_toclient_packet_server_data
  | play_toclient_packet_action_bar
  | play_toclient_packet_world_border_center
  | play_toclient_packet_world_border_lerp_size
  | play_toclient_packet_world_border_size
  | play_toclient_packet_world_border_warning_delay
  | play_toclient_packet_world_border_warning_reach
  | play_toclient_packet_camera
  | play_toclient_packet_held_item_slot
  | play_toclient_packet_update_view_position
  | play_toclient_packet_update_view_distance
  | play_toclient_packet_spawn_position
  | play_toclient_packet_scoreboard_display_objective
  | play_toclient_packet_entity_metadata
  | play_toclient_packet_attach_entity
  | play_toclient_packet_entity_velocity
  | play_toclient_packet_entity_equipment
  | play_toclient_packet_experience
  | play_toclient_packet_update_health
  | play_toclient_packet_scoreboard_objective
  | play_toclient_packet_set_passengers
  | play_toclient_packet_teams
  | play_toclient_packet_scoreboard_score
  | play_toclient_packet_simulation_distance
  | play_toclient_packet_set_title_subtitle
  | play_toclient_packet_update_time
  | play_toclient_packet_set_title_text
  | play_toclient_packet_set_title_time
  | play_toclient_packet_entity_sound_effect
  | play_toclient_packet_sound_effect
  | play_toclient_packet_start_configuration
  | play_toclient_packet_stop_sound
  | play_toclient_packet_system_chat
  | play_toclient_packet_playerlist_header
  | play_toclient_packet_nbt_query_response
  | play_toclient_packet_collect
  | play_toclient_packet_entity_teleport
  | play_toclient_packet_set_ticking_state
  | play_toclient_packet_step_tick
  | play_toclient_packet_advancements
  | play_toclient_packet_entity_update_attributes
  | play_toclient_packet_entity_effect
  | play_toclient_packet_declare_recipes
  | play_toclient_packet_tags
  | play_toclient_packet_set_projectile_power
  | play_toclient_packet
  | play_toserver_packet_teleport_confirm
  | play_toserver_packet_query_block_nbt
  | play_toserver_packet_set_difficulty
  | play_toserver_packet_message_acknowledgement
  | play_toserver_packet_chat_command
  | play_toserver_packet_chat_command_signed
  | play_toserver_packet_chat_message
  | play_toserver_packet_chat_session_update
  | play_toserver_packet_chunk_batch_received
  | play_toserver_packet_client_command
  | play_toserver_packet_settings
  | play_toserver_packet_tab_complete
  | play_toserver_packet_configuration_acknowledged
  | play_toserver_packet_enchant_item
  | play_toserver_packet_window_click
  | play_toserver_packet_close_window
  | play_toserver_packet_set_slot_state
  | play_toserver_packet_custom_payload
  | play_toserver_packet_debug_sample_subscription
  | play_toserver_packet_edit_book
  | play_toserver_packet_query_entity_nbt
  | play_toserver_packet_use_entity
  | play_toserver_packet_generate_structure
  | play_toserver_packet_keep_alive
  | play_toserver_packet_lock_difficulty
  | play_toserver_packet_position
  | play_toserver_packet_position_look
  | play_toserver_packet_look
  | play_toserver_packet_flying
  | play_toserver_packet_vehicle_move
  | play_toserver_packet_steer_boat
  | play_toserver_packet_pick_item
  | play_toserver_packet_ping_request
  | play_toserver_packet_craft_recipe_request
  | play_toserver_packet_abilities
  | play_toserver_packet_block_dig
  | play_toserver_packet_entity_action
  | play_toserver_packet_steer_vehicle
  | play_toserver_packet_pong
  | play_toserver_packet_recipe_book
  | play_toserver_packet_displayed_recipe
  | play_toserver_packet_name_item
  | play_toserver_packet_resource_pack_receive
  | play_toserver_packet_advancement_tab
  | play_toserver_packet_select_trade
  | play_toserver_packet_set_beacon_effect
  | play_toserver_packet_held_item_slot
  | play_toserver_packet_update_command_block
  | play_toserver_packet_update_command_block_minecart
  | play_toserver_packet_set_creative_slot
  | play_toserver_packet_update_jigsaw_block
  | play_toserver_packet_update_structure_block
  | play_toserver_packet_update_sign
  | play_toserver_packet_arm_animation
  | play_toserver_packet_spectate
  | play_toserver_packet_block_place
  | play_toserver_packet_use_item
  | play_toserver_packet;

type play_toclient_packet_world_event = {
  effectId: number;
  location: never;
  data: number;
  global: boolean;
};
type configuration_toclient_packet_common_cookie_request =
  packet_common_cookie_request;
type play_toserver_packet_position = {
  x: number;
  y: number;
  z: number;
  onGround: boolean;
};
type play_toserver_packet_set_slot_state = {
  slot_id: number;
  window_id: number;
  state: boolean;
};
type status_toserver_packet = {
  name: "ping_start" | "ping";
  params: /* ping_start */
  status_toserver_packet_ping_start | /* ping */ status_toserver_packet_ping;
};
type play_toserver_packet_name_item = {
  name: string;
};
type play_toserver_packet_held_item_slot = {
  slotId: number;
};
type login_toclient_packet_common_cookie_request = packet_common_cookie_request;
type play_toclient_packet_ping_response = {
  id: number;
};
type play_toclient_packet_entity_destroy = {
  entityIds: number[];
};
type play_toclient_packet = {
  name:
    | "bundle_delimiter"
    | "spawn_entity"
    | "spawn_entity_experience_orb"
    | "animation"
    | "statistics"
    | "acknowledge_player_digging"
    | "block_break_animation"
    | "tile_entity_data"
    | "block_action"
    | "block_change"
    | "boss_bar"
    | "difficulty"
    | "chunk_batch_finished"
    | "chunk_batch_start"
    | "chunk_biomes"
    | "clear_titles"
    | "tab_complete"
    | "declare_commands"
    | "close_window"
    | "window_items"
    | "craft_progress_bar"
    | "set_slot"
    | "cookie_request"
    | "set_cooldown"
    | "chat_suggestions"
    | "custom_payload"
    | "damage_event"
    | "debug_sample"
    | "hide_message"
    | "kick_disconnect"
    | "profileless_chat"
    | "entity_status"
    | "explosion"
    | "unload_chunk"
    | "game_state_change"
    | "open_horse_window"
    | "hurt_animation"
    | "initialize_world_border"
    | "keep_alive"
    | "map_chunk"
    | "world_event"
    | "world_particles"
    | "update_light"
    | "login"
    | "map"
    | "trade_list"
    | "rel_entity_move"
    | "entity_move_look"
    | "entity_look"
    | "vehicle_move"
    | "open_book"
    | "open_window"
    | "open_sign_entity"
    | "ping"
    | "ping_response"
    | "craft_recipe_response"
    | "abilities"
    | "player_chat"
    | "end_combat_event"
    | "enter_combat_event"
    | "death_combat_event"
    | "player_remove"
    | "player_info"
    | "face_player"
    | "position"
    | "unlock_recipes"
    | "entity_destroy"
    | "remove_entity_effect"
    | "reset_score"
    | "remove_resource_pack"
    | "add_resource_pack"
    | "respawn"
    | "entity_head_rotation"
    | "multi_block_change"
    | "select_advancement_tab"
    | "server_data"
    | "action_bar"
    | "world_border_center"
    | "world_border_lerp_size"
    | "world_border_size"
    | "world_border_warning_delay"
    | "world_border_warning_reach"
    | "camera"
    | "held_item_slot"
    | "update_view_position"
    | "update_view_distance"
    | "spawn_position"
    | "scoreboard_display_objective"
    | "entity_metadata"
    | "attach_entity"
    | "entity_velocity"
    | "entity_equipment"
    | "experience"
    | "update_health"
    | "scoreboard_objective"
    | "set_passengers"
    | "teams"
    | "scoreboard_score"
    | "simulation_distance"
    | "set_title_subtitle"
    | "update_time"
    | "set_title_text"
    | "set_title_time"
    | "entity_sound_effect"
    | "sound_effect"
    | "start_configuration"
    | "stop_sound"
    | "store_cookie"
    | "system_chat"
    | "playerlist_header"
    | "nbt_query_response"
    | "collect"
    | "entity_teleport"
    | "set_ticking_state"
    | "step_tick"
    | "transfer"
    | "advancements"
    | "entity_update_attributes"
    | "entity_effect"
    | "declare_recipes"
    | "tags";
  params: /* bundle_delimiter */
  | never
    | /* spawn_entity */ play_toclient_packet_spawn_entity
    | /* spawn_entity_experience_orb */ play_toclient_packet_spawn_entity_experience_orb
    | /* animation */ play_toclient_packet_animation
    | /* statistics */ play_toclient_packet_statistics
    | /* acknowledge_player_digging */ play_toclient_packet_acknowledge_player_digging
    | /* block_break_animation */ play_toclient_packet_block_break_animation
    | /* tile_entity_data */ play_toclient_packet_tile_entity_data
    | /* block_action */ play_toclient_packet_block_action
    | /* block_change */ play_toclient_packet_block_change
    | /* boss_bar */ play_toclient_packet_boss_bar
    | /* difficulty */ play_toclient_packet_difficulty
    | /* chunk_batch_finished */ play_toclient_packet_chunk_batch_finished
    | /* chunk_batch_start */ play_toclient_packet_chunk_batch_start
    | /* chunk_biomes */ play_toclient_packet_chunk_biomes
    | /* clear_titles */ play_toclient_packet_clear_titles
    | /* tab_complete */ play_toclient_packet_tab_complete
    | /* declare_commands */ play_toclient_packet_declare_commands
    | /* close_window */ play_toclient_packet_close_window
    | /* window_items */ play_toclient_packet_window_items
    | /* craft_progress_bar */ play_toclient_packet_craft_progress_bar
    | /* set_slot */ play_toclient_packet_set_slot
    | /* cookie_request */ play_toclient_packet_common_cookie_request
    | /* set_cooldown */ play_toclient_packet_set_cooldown
    | /* chat_suggestions */ play_toclient_packet_chat_suggestions
    | /* custom_payload */ play_toclient_packet_custom_payload
    | /* damage_event */ play_toclient_packet_damage_event
    | /* debug_sample */ play_toclient_packet_debug_sample
    | /* hide_message */ play_toclient_packet_hide_message
    | /* kick_disconnect */ play_toclient_packet_kick_disconnect
    | /* profileless_chat */ play_toclient_packet_profileless_chat
    | /* entity_status */ play_toclient_packet_entity_status
    | /* explosion */ play_toclient_packet_explosion
    | /* unload_chunk */ play_toclient_packet_unload_chunk
    | /* game_state_change */ play_toclient_packet_game_state_change
    | /* open_horse_window */ play_toclient_packet_open_horse_window
    | /* hurt_animation */ play_toclient_packet_hurt_animation
    | /* initialize_world_border */ play_toclient_packet_initialize_world_border
    | /* keep_alive */ play_toclient_packet_keep_alive
    | /* map_chunk */ play_toclient_packet_map_chunk
    | /* world_event */ play_toclient_packet_world_event
    | /* world_particles */ play_toclient_packet_world_particles
    | /* update_light */ play_toclient_packet_update_light
    | /* login */ play_toclient_packet_login
    | /* map */ play_toclient_packet_map
    | /* trade_list */ play_toclient_packet_trade_list
    | /* rel_entity_move */ play_toclient_packet_rel_entity_move
    | /* entity_move_look */ play_toclient_packet_entity_move_look
    | /* entity_look */ play_toclient_packet_entity_look
    | /* vehicle_move */ play_toclient_packet_vehicle_move
    | /* open_book */ play_toclient_packet_open_book
    | /* open_window */ play_toclient_packet_open_window
    | /* open_sign_entity */ play_toclient_packet_open_sign_entity
    | /* ping */ play_toclient_packet_ping
    | /* ping_response */ play_toclient_packet_ping_response
    | /* craft_recipe_response */ play_toclient_packet_craft_recipe_response
    | /* abilities */ play_toclient_packet_abilities
    | /* player_chat */ play_toclient_packet_player_chat
    | /* end_combat_event */ play_toclient_packet_end_combat_event
    | /* enter_combat_event */ play_toclient_packet_enter_combat_event
    | /* death_combat_event */ play_toclient_packet_death_combat_event
    | /* player_remove */ play_toclient_packet_player_remove
    | /* player_info */ play_toclient_packet_player_info
    | /* face_player */ play_toclient_packet_face_player
    | /* position */ play_toclient_packet_position
    | /* unlock_recipes */ play_toclient_packet_unlock_recipes
    | /* entity_destroy */ play_toclient_packet_entity_destroy
    | /* remove_entity_effect */ play_toclient_packet_remove_entity_effect
    | /* reset_score */ play_toclient_packet_reset_score
    | /* remove_resource_pack */ play_toclient_packet_remove_resource_pack
    | /* add_resource_pack */ play_toclient_packet_add_resource_pack
    | /* respawn */ play_toclient_packet_respawn
    | /* entity_head_rotation */ play_toclient_packet_entity_head_rotation
    | /* multi_block_change */ play_toclient_packet_multi_block_change
    | /* select_advancement_tab */ play_toclient_packet_select_advancement_tab
    | /* server_data */ play_toclient_packet_server_data
    | /* action_bar */ play_toclient_packet_action_bar
    | /* world_border_center */ play_toclient_packet_world_border_center
    | /* world_border_lerp_size */ play_toclient_packet_world_border_lerp_size
    | /* world_border_size */ play_toclient_packet_world_border_size
    | /* world_border_warning_delay */ play_toclient_packet_world_border_warning_delay
    | /* world_border_warning_reach */ play_toclient_packet_world_border_warning_reach
    | /* camera */ play_toclient_packet_camera
    | /* held_item_slot */ play_toclient_packet_held_item_slot
    | /* update_view_position */ play_toclient_packet_update_view_position
    | /* update_view_distance */ play_toclient_packet_update_view_distance
    | /* spawn_position */ play_toclient_packet_spawn_position
    | /* scoreboard_display_objective */ play_toclient_packet_scoreboard_display_objective
    | /* entity_metadata */ play_toclient_packet_entity_metadata
    | /* attach_entity */ play_toclient_packet_attach_entity
    | /* entity_velocity */ play_toclient_packet_entity_velocity
    | /* entity_equipment */ play_toclient_packet_entity_equipment
    | /* experience */ play_toclient_packet_experience
    | /* update_health */ play_toclient_packet_update_health
    | /* scoreboard_objective */ play_toclient_packet_scoreboard_objective
    | /* set_passengers */ play_toclient_packet_set_passengers
    | /* teams */ play_toclient_packet_teams
    | /* scoreboard_score */ play_toclient_packet_scoreboard_score
    | /* simulation_distance */ play_toclient_packet_simulation_distance
    | /* set_title_subtitle */ play_toclient_packet_set_title_subtitle
    | /* update_time */ play_toclient_packet_update_time
    | /* set_title_text */ play_toclient_packet_set_title_text
    | /* set_title_time */ play_toclient_packet_set_title_time
    | /* entity_sound_effect */ play_toclient_packet_entity_sound_effect
    | /* sound_effect */ play_toclient_packet_sound_effect
    | /* start_configuration */ play_toclient_packet_start_configuration
    | /* stop_sound */ play_toclient_packet_stop_sound
    | /* store_cookie */ play_toclient_packet_common_store_cookie
    | /* system_chat */ play_toclient_packet_system_chat
    | /* playerlist_header */ play_toclient_packet_playerlist_header
    | /* nbt_query_response */ play_toclient_packet_nbt_query_response
    | /* collect */ play_toclient_packet_collect
    | /* entity_teleport */ play_toclient_packet_entity_teleport
    | /* set_ticking_state */ play_toclient_packet_set_ticking_state
    | /* step_tick */ play_toclient_packet_step_tick
    | /* transfer */ play_toclient_packet_common_transfer
    | /* advancements */ play_toclient_packet_advancements
    | /* entity_update_attributes */ play_toclient_packet_entity_update_attributes
    | /* entity_effect */ play_toclient_packet_entity_effect
    | /* declare_recipes */ play_toclient_packet_declare_recipes
    | /* tags */ play_toclient_packet_tags;
};
type play_toserver_packet_set_beacon_effect = {
  secondary_effect: number | undefined;
  primary_effect: number | undefined;
};
type play_toclient_packet_damage_event = {
  sourceTypeId: number;
  entityId: number;
  sourceDirectId: number;
  sourceCauseId: number;
  sourcePosition: play_toclient_vec3f64 | undefined;
};
type play_toclient_packet_multi_block_change = {
  chunkCoordinates: {
    x: number | boolean;
    z: number | boolean;
    y: number | boolean;
  };
  records: number[];
};
type play_toclient_packet_common_transfer = packet_common_transfer;
type play_toclient_packet_kick_disconnect = {
  reason: never;
};
type play_toclient_packet_common_cookie_request = packet_common_cookie_request;
type play_toserver_packet_tab_complete = {
  transactionId: number;
  text: string;
};
type play_toclient_packedChunkPos = packedChunkPos;
type play_toclient_packet_entity_move_look = {
  dY: number;
  entityId: number;
  pitch: number;
  dX: number;
  dZ: number;
  yaw: number;
  onGround: boolean;
};
type play_toserver_packet_position_look = {
  x: number;
  y: number;
  z: number;
  pitch: number;
  yaw: number;
  onGround: boolean;
};
type play_toserver_packet_update_structure_block = {
  metadata: string;
  location: never;
  size_y: number;
  mirror: number;
  flags: number;
  rotation: number;
  size_x: number;
  seed: number;
  mode: number;
  offset_z: number;
  name: string;
  size_z: number;
  offset_x: number;
  integrity: number;
  offset_y: number;
  action: number;
};
type configuration_toclient_packet_common_select_known_packs =
  packet_common_select_known_packs;
type handshaking_toserver_packet_set_protocol = {
  serverPort: number;
  serverHost: string;
  protocolVersion: number;
  nextState: number;
};
type play_toserver_vec2f = vec2f;
type configuration_toclient_packet = {
  name:
    | "cookie_request"
    | "custom_payload"
    | "disconnect"
    | "finish_configuration"
    | "keep_alive"
    | "ping"
    | "reset_chat"
    | "registry_data"
    | "remove_resource_pack"
    | "add_resource_pack"
    | "store_cookie"
    | "transfer"
    | "feature_flags"
    | "tags"
    | "select_known_packs"
    | "custom_report_details"
    | "server_links";
  params: /* cookie_request */
  | configuration_toclient_packet_common_cookie_request
    | /* custom_payload */ configuration_toclient_packet_custom_payload
    | /* disconnect */ configuration_toclient_packet_disconnect
    | /* finish_configuration */ configuration_toclient_packet_finish_configuration
    | /* keep_alive */ configuration_toclient_packet_keep_alive
    | /* ping */ configuration_toclient_packet_ping
    | /* reset_chat */ configuration_toclient_packet_reset_chat
    | /* registry_data */ configuration_toclient_packet_registry_data
    | /* remove_resource_pack */ configuration_toclient_packet_remove_resource_pack
    | /* add_resource_pack */ configuration_toclient_packet_add_resource_pack
    | /* store_cookie */ configuration_toclient_packet_common_store_cookie
    | /* transfer */ configuration_toclient_packet_common_transfer
    | /* feature_flags */ configuration_toclient_packet_feature_flags
    | /* tags */ configuration_toclient_packet_tags
    | /* select_known_packs */ configuration_toclient_packet_common_select_known_packs
    | /* custom_report_details */ configuration_toclient_packet_common_custom_report_details
    | /* server_links */ configuration_toclient_packet_common_server_links;
};
type play_toserver_packet_chunk_batch_received = {
  chunksPerTick: number;
};
type play_toserver_packet_configuration_acknowledged = Record<never, never> & {
  __type: "empty_object";
};
type configuration_toclient_packet_finish_configuration = Record<
  never,
  never
> & { __type: "empty_object" };
type configuration_toclient_packet_reset_chat = Record<never, never> & {
  __type: "empty_object";
};
type configuration_toclient_packet_add_resource_pack = {
  uuid: string;
  forced: boolean;
  url: string;
  hash: string;
  promptMessage: never | undefined;
};
type play_toclient_packet_clear_titles = {
  reset: boolean;
};
type play_toclient_packet_hurt_animation = {
  entityId: number;
  yaw: number;
};
type handshaking_toserver_packet = {
  name: "set_protocol" | "legacy_server_list_ping";
  params: /* set_protocol */
  | handshaking_toserver_packet_set_protocol
    | /* legacy_server_list_ping */ handshaking_toserver_packet_legacy_server_list_ping;
};
type status_toserver_packet_ping = {
  time: number;
};
type play_toclient_ChatType = {
  translationKey: string;
  style: never;
  parameters: play_toclient_ChatTypeParameterType[];
};
type play_toserver_packet_select_trade = {
  slot: number;
};
type play_toserver_packet_vehicle_move = {
  x: number;
  y: number;
  z: number;
  pitch: number;
  yaw: number;
};
type play_toserver_packet = {
  name:
    | "teleport_confirm"
    | "query_block_nbt"
    | "set_difficulty"
    | "message_acknowledgement"
    | "chat_command"
    | "chat_command_signed"
    | "chat_message"
    | "chat_session_update"
    | "chunk_batch_received"
    | "client_command"
    | "settings"
    | "tab_complete"
    | "configuration_acknowledged"
    | "enchant_item"
    | "window_click"
    | "close_window"
    | "set_slot_state"
    | "cookie_response"
    | "custom_payload"
    | "debug_sample_subscription"
    | "edit_book"
    | "query_entity_nbt"
    | "use_entity"
    | "generate_structure"
    | "keep_alive"
    | "lock_difficulty"
    | "position"
    | "position_look"
    | "look"
    | "flying"
    | "vehicle_move"
    | "steer_boat"
    | "pick_item"
    | "ping_request"
    | "craft_recipe_request"
    | "abilities"
    | "block_dig"
    | "entity_action"
    | "steer_vehicle"
    | "pong"
    | "recipe_book"
    | "displayed_recipe"
    | "name_item"
    | "resource_pack_receive"
    | "advancement_tab"
    | "select_trade"
    | "set_beacon_effect"
    | "held_item_slot"
    | "update_command_block"
    | "update_command_block_minecart"
    | "set_creative_slot"
    | "update_jigsaw_block"
    | "update_structure_block"
    | "update_sign"
    | "arm_animation"
    | "spectate"
    | "block_place"
    | "use_item";
  params: /* teleport_confirm */
  | play_toserver_packet_teleport_confirm
    | /* query_block_nbt */ play_toserver_packet_query_block_nbt
    | /* set_difficulty */ play_toserver_packet_set_difficulty
    | /* message_acknowledgement */ play_toserver_packet_message_acknowledgement
    | /* chat_command */ play_toserver_packet_chat_command
    | /* chat_command_signed */ play_toserver_packet_chat_command_signed
    | /* chat_message */ play_toserver_packet_chat_message
    | /* chat_session_update */ play_toserver_packet_chat_session_update
    | /* chunk_batch_received */ play_toserver_packet_chunk_batch_received
    | /* client_command */ play_toserver_packet_client_command
    | /* settings */ play_toserver_packet_settings
    | /* tab_complete */ play_toserver_packet_tab_complete
    | /* configuration_acknowledged */ play_toserver_packet_configuration_acknowledged
    | /* enchant_item */ play_toserver_packet_enchant_item
    | /* window_click */ play_toserver_packet_window_click
    | /* close_window */ play_toserver_packet_close_window
    | /* set_slot_state */ play_toserver_packet_set_slot_state
    | /* cookie_response */ play_toserver_packet_common_cookie_response
    | /* custom_payload */ play_toserver_packet_custom_payload
    | /* edit_book */ play_toserver_packet_edit_book
    | /* query_entity_nbt */ play_toserver_packet_query_entity_nbt
    | /* use_entity */ play_toserver_packet_use_entity
    | /* generate_structure */ play_toserver_packet_generate_structure
    | /* keep_alive */ play_toserver_packet_keep_alive
    | /* lock_difficulty */ play_toserver_packet_lock_difficulty
    | /* position */ play_toserver_packet_position
    | /* position_look */ play_toserver_packet_position_look
    | /* look */ play_toserver_packet_look
    | /* flying */ play_toserver_packet_flying
    | /* vehicle_move */ play_toserver_packet_vehicle_move
    | /* steer_boat */ play_toserver_packet_steer_boat
    | /* pick_item */ play_toserver_packet_pick_item
    | /* ping_request */ play_toserver_packet_ping_request
    | /* craft_recipe_request */ play_toserver_packet_craft_recipe_request
    | /* abilities */ play_toserver_packet_abilities
    | /* block_dig */ play_toserver_packet_block_dig
    | /* entity_action */ play_toserver_packet_entity_action
    | /* steer_vehicle */ play_toserver_packet_steer_vehicle
    | /* pong */ play_toserver_packet_pong
    | /* recipe_book */ play_toserver_packet_recipe_book
    | /* displayed_recipe */ play_toserver_packet_displayed_recipe
    | /* name_item */ play_toserver_packet_name_item
    | /* resource_pack_receive */ play_toserver_packet_resource_pack_receive
    | /* advancement_tab */ play_toserver_packet_advancement_tab
    | /* select_trade */ play_toserver_packet_select_trade
    | /* set_beacon_effect */ play_toserver_packet_set_beacon_effect
    | /* held_item_slot */ play_toserver_packet_held_item_slot
    | /* update_command_block */ play_toserver_packet_update_command_block
    | /* update_command_block_minecart */ play_toserver_packet_update_command_block_minecart
    | /* set_creative_slot */ play_toserver_packet_set_creative_slot
    | /* update_jigsaw_block */ play_toserver_packet_update_jigsaw_block
    | /* update_structure_block */ play_toserver_packet_update_structure_block
    | /* update_sign */ play_toserver_packet_update_sign
    | /* arm_animation */ play_toserver_packet_arm_animation
    | /* spectate */ play_toserver_packet_spectate
    | /* block_place */ play_toserver_packet_block_place
    | /* use_item */ play_toserver_packet_use_item;
};
type play_toclient_packet_set_ticking_state = {
  tick_rate: number;
  is_frozen: boolean;
};
type play_toclient_packet_set_projectile_power = {
  id: number;
  accelerationPower: number;
};
type configuration_toclient_packet_feature_flags = {
  features: string[];
};
type play_toserver_packet_chat_session_update = {
  publicKey: play_toserver_ByteArray;
  expireTime: number;
  signature: play_toserver_ByteArray;
  sessionUUID: string;
};
type play_toclient_packet_end_combat_event = {
  duration: number;
};
type play_toclient_packet_entity_effect = {
  effectId: number;
  amplifier: number;
  entityId: number;
  flags: number;
  duration: number;
};
type configuration_toclient_packet_common_server_links =
  packet_common_server_links;
type play_toclient_packet_initialize_world_border = {
  speed: number;
  newDiameter: number;
  x: number;
  z: number;
  warningBlocks: number;
  oldDiameter: number;
  portalTeleportBoundary: number;
  warningTime: number;
};
type play_toclient_packet_entity_look = {
  entityId: number;
  pitch: number;
  yaw: number;
  onGround: boolean;
};
type play_toclient_packet_close_window = {
  windowId: number;
};
type play_toclient_packet_craft_recipe_response = {
  windowId: number;
  recipe: string;
};
type play_toserver_packet_use_item = {
  sequence: number;
  rotation: play_toserver_vec2f;
  hand: number;
};
type login_toserver_packet_login_acknowledged = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_packet_spawn_position = {
  location: never;
  angle: number;
};
type play_toclient_packet_scoreboard_score = {
  itemName: string;
  value: number;
  display_name: never | undefined;
  number_format: number | undefined;
  styling: /* 1 */ never | /* 2 */ never | never;
  scoreName: string;
};
type login_toclient_packet_compress = {
  threshold: number;
};
type play_toclient_packet_trade_list = {
  trades: {
    nbTradeUses: number;
    xp: number;
    specialPrice: number;
    demand: number;
    maximumNbTradeUses: number;
    inputItem2:
      | {
          addedComponentCount: number;
          components: play_toclient_SlotComponent[];
          itemId: number;
          inputItem1: {
            windowId: number;
            addedComponentCount: number;
            components: play_toclient_SlotComponent[];
            itemId: number;
            itemCount: number;
          };
          itemCount: number;
          outputItem: play_toclient_Slot;
        }
      | undefined;
    priceMultiplier: number;
    tradeDisabled: boolean;
  }[];
  villagerLevel: number;
  isRegularVillager: boolean;
  experience: number;
  canRestock: boolean;
};
type play_toserver_packet_settings = {
  enableTextFiltering: boolean;
  skinParts: number;
  chatFlags: number;
  chatColors: boolean;
  mainHand: number;
  locale: string;
  viewDistance: number;
  enableServerListing: boolean;
};
type play_toserver_packet_pong = {
  id: number;
};
type play_toclient_packet_nbt_query_response = {
  transactionId: number;
  nbt: play_toclient_anonOptionalNbt;
};
type play_toserver_packet_ping_request = {
  id: number;
};
type play_toclient_packet_entity_sound_effect = {
  soundCategory: play_toclient_soundSource;
  soundEvent: /* 0 */
  | {
        soundId: number;
        range: number | undefined;
        resource: string;
      }
    | never;
  volume: number;
  entityId: number;
  pitch: number;
  seed: number;
};
type play_toserver_packet_debug_sample_subscription = {
  type: number;
};
type play_toserver_ByteArray = ByteArray;
type play_toclient_SpawnInfo = {
  death:
    | {
        name: string;
        isFlat: boolean;
        isDebug: boolean;
        location: never;
        dimension: number;
        previousGamemode: number;
        hashedSeed: number;
        gamemode: "survival" | "creative" | "adventure" | "spectator";
        dimensionName: string;
      }
    | undefined;
  portalCooldown: number;
};
type play_toclient_packet_boss_bar = {
  entityUUID: string;
  title: /* 0 */ never | /* 3 */ never | never;
  health: /* 0 */ number | /* 2 */ number | never;
  dividers: /* 0 */ number | /* 4 */ number | never;
  flags: /* 0 */ number | /* 5 */ number | never;
  color: /* 0 */ number | /* 4 */ number | never;
  action: number;
};
type play_toserver_packet_update_sign = {
  text4: string;
  location: never;
  text1: string;
  isFrontText: boolean;
  text3: string;
  text2: string;
};
type play_toclient_packet_block_break_animation = {
  destroyStage: number;
  location: never;
  entityId: number;
};
type configuration_toserver_packet_common_select_known_packs =
  packet_common_select_known_packs;
type play_toclient_packet_select_advancement_tab = {
  id: string | undefined;
};
type play_toclient_packet_block_action = {
  location: never;
  byte2: number;
  byte1: number;
  blockId: number;
};
type play_toclient_packet_tab_complete = {
  matches: {
    length: number;
    match: string;
    transactionId: number;
    start: number;
    tooltip: never | undefined;
  }[];
};
type play_toclient_command_node = command_node;
type play_toclient_packet_advancements = {
  progressMapping: {
    value: {
      identifiers: string[];
      advancementMapping: {
        value: {
          sendsTelemtryData: boolean;
          requirements: string[][];
          displayData:
            | {
                key: string;
                icon: play_toclient_Slot;
                xCord: number;
                title: never;
                flags: {
                  unused: number | boolean;
                  hidden: number | boolean;
                  show_toast: number | boolean;
                  has_background_texture: number | boolean;
                };
                parentId: string | undefined;
                reset: boolean;
                yCord: number;
                frameType: number;
                description: never;
                backgroundTexture: /* 1 */ string | never;
              }
            | undefined;
        };
      }[];
      key: string;
      criterionIdentifier: string;
      criterionProgress: number | undefined;
    }[];
  }[];
};
type play_toclient_packet_declare_recipes = {
  recipes: {
    data: /* minecraft:crafting_shapeless */
    | {
          name: string;
          category: number;
          result: play_toclient_Slot;
          type:
            | "minecraft:crafting_shaped"
            | "minecraft:crafting_shapeless"
            | "minecraft:crafting_special_armordye"
            | "minecraft:crafting_special_bookcloning"
            | "minecraft:crafting_special_mapcloning"
            | "minecraft:crafting_special_mapextending"
            | "minecraft:crafting_special_firework_rocket"
            | "minecraft:crafting_special_firework_star"
            | "minecraft:crafting_special_firework_star_fade"
            | "minecraft:crafting_special_tippedarrow"
            | "minecraft:crafting_special_bannerduplicate"
            | "minecraft:crafting_special_shielddecoration"
            | "minecraft:crafting_special_shulkerboxcoloring"
            | "minecraft:crafting_special_suspiciousstew"
            | "minecraft:crafting_special_repairitem"
            | "minecraft:smelting"
            | "minecraft:blasting"
            | "minecraft:smoking"
            | "minecraft:campfire_cooking"
            | "minecraft:stonecutting"
            | "minecraft:smithing_transform"
            | "minecraft:smithing_trim"
            | "minecraft:crafting_decorated_pot";
          ingredients: play_toclient_ingredient[];
          group: string;
        }
      | /* minecraft:crafting_shaped */ {
          category: number;
          width: number;
          showNotification: boolean;
          result: play_toclient_Slot;
          ingredients: play_toclient_ingredient[][];
          group: string;
          height: number;
        }
      | /* minecraft:crafting_special_armordye */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_bookcloning */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_mapcloning */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_mapextending */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_rocket */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_star */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_star_fade */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_repairitem */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_tippedarrow */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_bannerduplicate */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_banneraddpattern */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_shielddecoration */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_shulkerboxcoloring */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_suspiciousstew */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:smelting */ play_toclient_minecraft_smelting_format
      | /* minecraft:blasting */ play_toclient_minecraft_smelting_format
      | /* minecraft:smoking */ play_toclient_minecraft_smelting_format
      | /* minecraft:campfire_cooking */ play_toclient_minecraft_smelting_format
      | /* minecraft:stonecutting */ {
          ingredient: play_toclient_ingredient;
          result: play_toclient_Slot;
          group: string;
        }
      | /* minecraft:smithing_transform */ {
          addition: play_toclient_ingredient;
          result: play_toclient_Slot;
          template: play_toclient_ingredient;
          base: play_toclient_ingredient;
        }
      | /* minecraft:smithing_trim */ {
          addition: play_toclient_ingredient;
          template: play_toclient_ingredient;
          base: play_toclient_ingredient;
        }
      | /* minecraft:crafting_decorated_pot */ play_toclient_minecraft_simple_recipe_format;
  }[];
};
type play_toserver_packet_flying = {
  onGround: boolean;
};
type play_toserver_packet_update_command_block = {
  location: never;
  command: string;
  flags: number;
  mode: number;
};
type play_toclient_packet_entity_equipment = {
  equipments: never;
  entityId: number;
};
type play_toclient_packet_open_book = {
  hand: number;
};
type play_toclient_packet_experience = {
  experienceBar: number;
  totalExperience: number;
  level: number;
};
type play_toclient_Particle = Particle;
type play_toclient_packet_open_sign_entity = {
  location: never;
  isFrontText: boolean;
};
type play_toclient_ByteArray = ByteArray;
type play_toclient_packet_map_chunk = {
  blockEntities: play_toclient_chunkBlockEntity[];
  skyLight: number[][];
  chunkData: never;
  emptySkyLightMask: number[];
  heightmaps: never;
  blockLight: number[][];
  x: number;
  z: number;
  emptyBlockLightMask: number[];
  skyLightMask: number[];
  blockLightMask: number[];
};
type configuration_toclient_packet_ping = {
  id: number;
};
type play_toclient_packet_add_resource_pack = {
  uuid: string;
  forced: boolean;
  url: string;
  hash: string;
  promptMessage: never | undefined;
};
type play_toclient_packet_entity_velocity = {
  velocityX: number;
  velocityZ: number;
  entityId: number;
  velocityY: number;
};
type configuration_toclient_packet_remove_resource_pack = {
  uuid: string | undefined;
};
type play_toclient_packet_step_tick = {
  tick_steps: number;
};
type play_toclient_packet_map = {
  rows: /* 0 */ never | number;
  columns: number;
  x: /* 0 */ never | number;
  y: /* 0 */ never | number;
  data: /* 0 */ never | never;
  icons:
    | {
        displayName: never | undefined;
        type: number;
        itemDamage: number;
        x: number;
        z: number;
        scale: number;
        direction: number;
        locked: boolean;
      }[]
    | undefined;
};
type play_toclient_packet_open_horse_window = {
  windowId: number;
  entityId: number;
  nbSlots: number;
};
type status_toclient_packet_ping = {
  time: number;
};
type play_toclient_packet_set_title_subtitle = {
  text: never;
};
type play_toclient_packet_reset_score = {
  objective_name: string | undefined;
  entity_name: string;
};
type play_toclient_vec3f64 = vec3f64;
type play_toserver_packet_query_block_nbt = {
  location: never;
  transactionId: number;
};
type play_toserver_packet_displayed_recipe = {
  recipeId: string;
};
type play_toserver_packet_look = {
  pitch: number;
  yaw: number;
  onGround: boolean;
};
type play_toclient_packet_ping = {
  id: number;
};
type play_toclient_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type login_toserver_packet_encryption_begin = {
  sharedSecret: never;
  verifyToken: never;
};
type play_toclient_packet_chat_suggestions = {
  entries: string[];
  action: number;
};
type play_toserver_packet_lock_difficulty = {
  locked: boolean;
};
type play_toserver_packet_resource_pack_receive = {
  uuid: string;
  result: number;
};
type login_toserver_packet_login_start = {
  playerUUID: string;
  username: string;
};
type play_toclient_packet_debug_sample = {
  type: number;
  sample: number[];
};
type login_toclient_packet_login_plugin_request = {
  messageId: number;
  channel: string;
  data: buffer;
};
type play_toclient_anonOptionalNbt = anonOptionalNbt;
type play_toserver_packet_message_acknowledgement = {
  count: number;
};
type play_toserver_packet_close_window = {
  windowId: number;
};
type play_toserver_packet_use_entity = {
  target: number;
  hand: /* 0 */ number | /* 2 */ number | never;
  x: /* 2 */ number | never;
  y: /* 2 */ number | never;
  z: /* 2 */ number | never;
  mouse: number;
  sneaking: boolean;
};
type play_toserver_packet_steer_vehicle = {
  sideways: number;
  forward: number;
  jump: number;
};
type login_toclient_packet = {
  name:
    | "disconnect"
    | "encryption_begin"
    | "success"
    | "compress"
    | "login_plugin_request"
    | "cookie_request";
  params: /* disconnect */
  | login_toclient_packet_disconnect
    | /* encryption_begin */ login_toclient_packet_encryption_begin
    | /* success */ login_toclient_packet_success
    | /* compress */ login_toclient_packet_compress
    | /* login_plugin_request */ login_toclient_packet_login_plugin_request
    | /* cookie_request */ login_toclient_packet_common_cookie_request;
};
type play_toserver_packet_update_jigsaw_block = {
  name: string;
  pool: string;
  location: never;
  target: string;
  jointType: string;
  finalState: string;
  selection_priority: number;
  placement_priority: number;
};
type play_toclient_minecraft_simple_recipe_format =
  minecraft_simple_recipe_format;
type play_toclient_packet_collect = {
  collectorEntityId: number;
  collectedEntityId: number;
  pickupItemCount: number;
};
type play_toserver_packet_client_command = {
  actionId: number;
};
type play_toserver_packet_enchant_item = {
  enchantment: number;
  windowId: number;
};
type play_toserver_packet_update_command_block_minecart = {
  command: string;
  track_output: boolean;
  entityId: number;
};
type play_toserver_packet_keep_alive = {
  keepAliveId: number;
};
type play_toclient_packet_entity_teleport = {
  entityId: number;
  x: number;
  y: number;
  z: number;
  pitch: number;
  yaw: number;
  onGround: boolean;
};
type play_toserver_packet_entity_action = {
  entityId: number;
  jumpBoost: number;
  actionId: number;
};
type play_toclient_packet_entity_update_attributes = {
  properties: {
    modifiers: {
      value: number;
      key:
        | "generic.armor"
        | "generic.armor_toughness"
        | "generic.attack_damage"
        | "generic.attack_knockback"
        | "generic.attack_speed"
        | "player.block_break_speed"
        | "player.block_interaction_range"
        | "player.entity_interaction_range"
        | "generic.fall_damage_multiplier"
        | "generic.flying_speed"
        | "generic.follow_range"
        | "generic.gravity"
        | "generic.jump_strength"
        | "generic.knockback_resistance"
        | "generic.luck"
        | "generic.max_absorption"
        | "generic.max_health"
        | "generic.movement_speed"
        | "generic.safe_fall_distance"
        | "generic.scale"
        | "zombie.spawn_reinforcements"
        | "generic.step_height";
      uuid: string;
      entityId: number;
      amount: number;
      operation: number;
    }[];
  }[];
};
type login_toserver_packet_login_plugin_response = {
  messageId: number;
  data: buffer | undefined;
};
type configuration_toclient_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type play_toclient_packet_world_particles = {
  offsetX: number;
  offsetY: number;
  offsetZ: number;
  x: number;
  y: number;
  z: number;
  amount: number;
  velocityOffset: number;
  particle: play_toclient_Particle;
  longDistance: boolean;
};
type play_toserver_packet_teleport_confirm = {
  teleportId: number;
};
type login_toserver_packet = {
  name:
    | "login_start"
    | "encryption_begin"
    | "login_plugin_response"
    | "login_acknowledged"
    | "cookie_response";
  params: /* login_start */
  | login_toserver_packet_login_start
    | /* encryption_begin */ login_toserver_packet_encryption_begin
    | /* login_plugin_response */ login_toserver_packet_login_plugin_response
    | /* login_acknowledged */ login_toserver_packet_login_acknowledged
    | /* cookie_response */ login_toserver_packet_common_cookie_response;
};
type configuration_toclient_packet_common_custom_report_details =
  packet_common_custom_report_details;
type play_toserver_packet_abilities = {
  flags: number;
};
type configuration_toclient_packet_common_transfer = packet_common_transfer;
type play_toclient_packet_set_title_time = {
  fadeOut: number;
  stay: number;
  fadeIn: number;
};
type play_toclient_packet_death_combat_event = {
  playerId: number;
  message: never;
};
type play_toclient_packet_player_remove = {
  players: string[];
};
type play_toclient_packet_stop_sound = {
  sound: /* 2 */ string | /* 3 */ string | never;
  flags: number;
  source: /* 1 */ number | /* 3 */ number | never;
};
type play_toserver_packet_chat_command_signed = {
  messageCount: number;
  argumentSignatures: {
    command: string;
    salt: number;
    signature: never;
    argumentName: string;
    timestamp: number;
  }[];
  acknowledged: never;
};
type play_toclient_packet_attach_entity = {
  entityId: number;
  vehicleId: number;
};
type status_toclient_packet = {
  name: "server_info" | "ping";
  params: /* server_info */
  status_toclient_packet_server_info | /* ping */ status_toclient_packet_ping;
};
type configuration_toclient_packet_common_store_cookie =
  packet_common_store_cookie;
type play_toclient_packet_world_border_size = {
  diameter: number;
};
type play_toclient_packet_camera = {
  cameraId: number;
};
type play_toclient_packet_abilities = {
  flags: number;
  flyingSpeed: number;
  walkingSpeed: number;
};
type play_toclient_packet_common_store_cookie = packet_common_store_cookie;
type play_toclient_packet_system_chat = {
  content: never;
  isActionBar: boolean;
};
type configuration_toserver_packet = {
  name:
    | "settings"
    | "cookie_response"
    | "custom_payload"
    | "finish_configuration"
    | "keep_alive"
    | "pong"
    | "resource_pack_receive"
    | "select_known_packs"
    | "custom_report_details"
    | "server_links";
  params: /* settings */
  | configuration_toserver_packet_settings
    | /* cookie_response */ configuration_toserver_packet_common_cookie_response
    | /* custom_payload */ configuration_toserver_packet_custom_payload
    | /* finish_configuration */ configuration_toserver_packet_finish_configuration
    | /* keep_alive */ configuration_toserver_packet_keep_alive
    | /* pong */ configuration_toserver_packet_pong
    | /* resource_pack_receive */ configuration_toserver_packet_resource_pack_receive
    | /* select_known_packs */ configuration_toserver_packet_common_select_known_packs
    | /* custom_report_details */ configuration_toserver_packet_common_custom_report_details
    | /* server_links */ configuration_toserver_packet_common_server_links;
};
type login_toclient_packet_disconnect = {
  reason: string;
};
type status_toserver_packet_ping_start = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_packet_craft_progress_bar = {
  value: number;
  windowId: number;
  property: number;
};
type play_toclient_packet_unlock_recipes = {
  filteringSmeltable: boolean;
  filteringCraftable: boolean;
  recipes1: string[];
  filteringBlastFurnace: boolean;
  filteringSmoker: boolean;
  recipes2: /* 0 */ string[] | never;
  smokerBookOpen: boolean;
  action: number;
  smeltingBookOpen: boolean;
  craftingBookOpen: boolean;
  blastFurnaceOpen: boolean;
};
type play_toclient_packet_world_border_lerp_size = {
  speed: number;
  newDiameter: number;
  oldDiameter: number;
};
type play_toclient_packet_world_border_warning_delay = {
  warningTime: number;
};
type play_toclient_packet_difficulty = {
  difficulty: number;
  difficultyLocked: boolean;
};
type login_toserver_packet_common_cookie_response =
  packet_common_cookie_response;
type play_toclient_packet_vehicle_move = {
  x: number;
  y: number;
  z: number;
  pitch: number;
  yaw: number;
};
type configuration_toserver_packet_settings = {
  enableTextFiltering: boolean;
  skinParts: number;
  chatFlags: number;
  chatColors: boolean;
  mainHand: number;
  locale: string;
  viewDistance: number;
  enableServerListing: boolean;
};
type play_toclient_packet_login = {
  doLimitedCrafting: boolean;
  worldState: play_toclient_SpawnInfo;
  enforcesSecureChat: boolean;
  isHardcore: boolean;
  worldNames: string[];
  entityId: number;
  simulationDistance: number;
  reducedDebugInfo: boolean;
  enableRespawnScreen: boolean;
  maxPlayers: number;
  viewDistance: number;
};
type play_toclient_packet_player_chat = {
  previousMessages: play_toclient_previousMessages;
  filterTypeMask: /* 2 */ number[] | never;
  networkTargetName: never | undefined;
  filterType: number;
  salt: number;
  signature: never | undefined;
  type: play_toclient_ChatTypes;
  senderUuid: string;
  unsignedChatContent: never | undefined;
  index: number;
  networkName: never;
  plainMessage: string;
  timestamp: number;
};
type play_toclient_packet_update_view_position = {
  chunkX: number;
  chunkZ: number;
};
type play_toclient_packet_spawn_entity = {
  headPitch: number;
  objectData: number;
  velocityX: number;
  velocityZ: number;
  entityId: number;
  type: number;
  x: number;
  y: number;
  z: number;
  pitch: number;
  yaw: number;
  velocityY: number;
  objectUUID: string;
};
type play_toserver_packet_edit_book = {
  title: string | undefined;
  hand: number;
  pages: string[];
};
type play_toclient_packet_chunk_batch_finished = {
  batchSize: number;
};
type play_toclient_ingredient = ingredient;
type play_toclient_packet_rel_entity_move = {
  dY: number;
  entityId: number;
  dX: number;
  dZ: number;
  onGround: boolean;
};
type play_toclient_packet_update_time = {
  time: number;
  age: number;
};
type play_toclient_packet_entity_status = {
  entityId: number;
  entityStatus: number;
};
type handshaking_toserver_packet_legacy_server_list_ping = {
  payload: number;
};
type play_toclient_packet_scoreboard_display_objective = {
  name: string;
  position: number;
};
type configuration_toclient_packet_registry_data = {
  entries: {
    value: never | undefined;
    key: string;
    id: string;
  }[];
};
type play_toclient_packet_explosion = {};
type login_toclient_packet_success = {
  strictErrorHandling: boolean;
  properties: {
    name: string;
    value: string;
    uuid: string;
    signature: string | undefined;
    username: string;
  }[];
};
type play_toserver_packet_advancement_tab = {
  action: number;
  tabId: /* 0 */ string | /* 1 */ never;
};
type play_toserver_packet_window_click = {
  cursorItem: play_toserver_Slot;
  changedSlots: {
    slot: number;
    windowId: number;
    stateId: number;
    location: number;
    item: play_toserver_Slot;
    mouseButton: number;
    mode: number;
  }[];
};
type configuration_toclient_packet_tags = {
  tags: {
    tags: configuration_toclient_tags;
    tagType: string;
  }[];
};
type play_toclient_packet_update_light = {
  chunkX: number;
  skyLight: number[][];
  emptySkyLightMask: number[];
  blockLight: number[][];
  chunkZ: number;
  emptyBlockLightMask: number[];
  skyLightMask: number[];
  blockLightMask: number[];
};
type play_toserver_packet_common_cookie_response =
  packet_common_cookie_response;
type play_toclient_packet_player_info = {
  data: {
    uuid: string;
    listed: /* 8 */
    | boolean
      | /* 9 */ boolean
      | /* 10 */ boolean
      | /* 11 */ boolean
      | /* 12 */ boolean
      | /* 13 */ boolean
      | /* 14 */ boolean
      | /* 15 */ boolean
      | /* 24 */ boolean
      | /* 25 */ boolean
      | /* 26 */ boolean
      | /* 27 */ boolean
      | /* 28 */ boolean
      | /* 29 */ boolean
      | /* 30 */ boolean
      | /* 31 */ boolean
      | /* 40 */ boolean
      | /* 41 */ boolean
      | /* 42 */ boolean
      | /* 43 */ boolean
      | /* 44 */ boolean
      | /* 45 */ boolean
      | /* 46 */ boolean
      | /* 47 */ boolean
      | /* 56 */ boolean
      | /* 57 */ boolean
      | /* 58 */ boolean
      | /* 59 */ boolean
      | /* 60 */ boolean
      | /* 61 */ boolean
      | /* 62 */ boolean
      | /* 63 */ boolean
      | never;
    latency: /* 16 */
    | number
      | /* 17 */ number
      | /* 18 */ number
      | /* 19 */ number
      | /* 20 */ number
      | /* 21 */ number
      | /* 22 */ number
      | /* 23 */ number
      | /* 24 */ number
      | /* 25 */ number
      | /* 26 */ number
      | /* 27 */ number
      | /* 28 */ number
      | /* 29 */ number
      | /* 30 */ number
      | /* 31 */ number
      | /* 48 */ number
      | /* 49 */ number
      | /* 50 */ number
      | /* 51 */ number
      | /* 52 */ number
      | /* 53 */ number
      | /* 54 */ number
      | /* 55 */ number
      | /* 56 */ number
      | /* 57 */ number
      | /* 58 */ number
      | /* 59 */ number
      | /* 60 */ number
      | /* 61 */ number
      | /* 62 */ number
      | /* 63 */ number
      | never;
    displayName: /* 32 */
    | (never | undefined)
      | /* 33 */ (never | undefined)
      | /* 34 */ (never | undefined)
      | /* 35 */ (never | undefined)
      | /* 36 */ (never | undefined)
      | /* 37 */ (never | undefined)
      | /* 38 */ (never | undefined)
      | /* 39 */ (never | undefined)
      | /* 40 */ (never | undefined)
      | /* 41 */ (never | undefined)
      | /* 42 */ (never | undefined)
      | /* 43 */ (never | undefined)
      | /* 44 */ (never | undefined)
      | /* 45 */ (never | undefined)
      | /* 46 */ (never | undefined)
      | /* 47 */ (never | undefined)
      | /* 48 */ (never | undefined)
      | /* 49 */ (never | undefined)
      | /* 50 */ (never | undefined)
      | /* 51 */ (never | undefined)
      | /* 52 */ (never | undefined)
      | /* 53 */ (never | undefined)
      | /* 54 */ (never | undefined)
      | /* 55 */ (never | undefined)
      | /* 56 */ (never | undefined)
      | /* 57 */ (never | undefined)
      | /* 58 */ (never | undefined)
      | /* 59 */ (never | undefined)
      | /* 60 */ (never | undefined)
      | /* 61 */ (never | undefined)
      | /* 62 */ (never | undefined)
      | /* 63 */ (never | undefined)
      | never;
    player: /* 1 */
    | play_toclient_game_profile
      | /* 3 */ play_toclient_game_profile
      | /* 5 */ play_toclient_game_profile
      | /* 7 */ play_toclient_game_profile
      | /* 9 */ play_toclient_game_profile
      | /* 11 */ play_toclient_game_profile
      | /* 13 */ play_toclient_game_profile
      | /* 15 */ play_toclient_game_profile
      | /* 17 */ play_toclient_game_profile
      | /* 19 */ play_toclient_game_profile
      | /* 21 */ play_toclient_game_profile
      | /* 23 */ play_toclient_game_profile
      | /* 25 */ play_toclient_game_profile
      | /* 27 */ play_toclient_game_profile
      | /* 29 */ play_toclient_game_profile
      | /* 31 */ play_toclient_game_profile
      | /* 33 */ play_toclient_game_profile
      | /* 35 */ play_toclient_game_profile
      | /* 37 */ play_toclient_game_profile
      | /* 39 */ play_toclient_game_profile
      | /* 41 */ play_toclient_game_profile
      | /* 43 */ play_toclient_game_profile
      | /* 45 */ play_toclient_game_profile
      | /* 47 */ play_toclient_game_profile
      | /* 49 */ play_toclient_game_profile
      | /* 51 */ play_toclient_game_profile
      | /* 53 */ play_toclient_game_profile
      | /* 55 */ play_toclient_game_profile
      | /* 57 */ play_toclient_game_profile
      | /* 59 */ play_toclient_game_profile
      | /* 61 */ play_toclient_game_profile
      | /* 63 */ play_toclient_game_profile
      | never;
    action: number;
    chatSession: /* 2 */
    | play_toclient_chat_session
      | /* 3 */ play_toclient_chat_session
      | /* 6 */ play_toclient_chat_session
      | /* 7 */ play_toclient_chat_session
      | /* 10 */ play_toclient_chat_session
      | /* 11 */ play_toclient_chat_session
      | /* 14 */ play_toclient_chat_session
      | /* 15 */ play_toclient_chat_session
      | /* 18 */ play_toclient_chat_session
      | /* 19 */ play_toclient_chat_session
      | /* 22 */ play_toclient_chat_session
      | /* 23 */ play_toclient_chat_session
      | /* 26 */ play_toclient_chat_session
      | /* 27 */ play_toclient_chat_session
      | /* 30 */ play_toclient_chat_session
      | /* 31 */ play_toclient_chat_session
      | /* 34 */ play_toclient_chat_session
      | /* 35 */ play_toclient_chat_session
      | /* 38 */ play_toclient_chat_session
      | /* 39 */ play_toclient_chat_session
      | /* 42 */ play_toclient_chat_session
      | /* 43 */ play_toclient_chat_session
      | /* 46 */ play_toclient_chat_session
      | /* 47 */ play_toclient_chat_session
      | /* 50 */ play_toclient_chat_session
      | /* 51 */ play_toclient_chat_session
      | /* 54 */ play_toclient_chat_session
      | /* 55 */ play_toclient_chat_session
      | /* 58 */ play_toclient_chat_session
      | /* 59 */ play_toclient_chat_session
      | /* 62 */ play_toclient_chat_session
      | /* 63 */ play_toclient_chat_session
      | never;
    gamemode: /* 4 */
    | number
      | /* 5 */ number
      | /* 6 */ number
      | /* 7 */ number
      | /* 12 */ number
      | /* 13 */ number
      | /* 14 */ number
      | /* 15 */ number
      | /* 20 */ number
      | /* 21 */ number
      | /* 22 */ number
      | /* 23 */ number
      | /* 28 */ number
      | /* 29 */ number
      | /* 30 */ number
      | /* 31 */ number
      | /* 36 */ number
      | /* 37 */ number
      | /* 38 */ number
      | /* 39 */ number
      | /* 44 */ number
      | /* 45 */ number
      | /* 46 */ number
      | /* 47 */ number
      | /* 52 */ number
      | /* 53 */ number
      | /* 54 */ number
      | /* 55 */ number
      | /* 60 */ number
      | /* 61 */ number
      | /* 62 */ number
      | /* 63 */ number
      | never;
  }[];
};
type play_toserver_packet_chat_command = {
  command: string;
};
type play_toserver_packet_pick_item = {
  slot: number;
};
type play_toclient_packet_unload_chunk = {
  chunkX: number;
  chunkZ: number;
};
type play_toclient_packet_game_state_change = {
  gameMode: number;
  reason: number;
};
type play_toclient_packet_entity_head_rotation = {
  entityId: number;
  headYaw: number;
};
type play_toclient_packet_statistics = {
  entries: {
    value: number;
    categoryId: number;
    statisticId: number;
  }[];
};
type play_toclient_game_profile = game_profile;
type play_toserver_Slot = Slot;
type play_toclient_packet_position = {
  flags: number;
  teleportId: number;
  x: number;
  y: number;
  z: number;
  pitch: number;
  yaw: number;
};
type play_toserver_packet_steer_boat = {
  rightPaddle: boolean;
  leftPaddle: boolean;
};
type play_toclient_ChatTypes = {};
type configuration_toserver_packet_resource_pack_receive = {
  uuid: string;
  result: number;
};
type play_toclient_packet_set_cooldown = {
  itemID: number;
  cooldownTicks: number;
};
type play_toserver_packet_craft_recipe_request = {
  windowId: number;
  recipe: string;
  makeAll: boolean;
};
type play_toclient_packet_update_view_distance = {
  viewDistance: number;
};
type configuration_toclient_packet_disconnect = {
  reason: never;
};
type play_toserver_packet_query_entity_nbt = {
  transactionId: number;
  entityId: number;
};
type play_toserver_packet_block_dig = {
  sequence: number;
  location: never;
  status: number;
  face: number;
};
type play_toclient_packet_teams = {
  name: /* 0 */ never | /* 2 */ never | never;
  suffix: /* 0 */ never | /* 2 */ never | never;
  team: string;
  collisionRule: /* 0 */ string | /* 2 */ string | never;
  players: /* 0 */ string[] | /* 3 */ string[] | /* 4 */ string[] | never;
  prefix: /* 0 */ never | /* 2 */ never | never;
  mode: number;
  friendlyFire: /* 0 */ number | /* 2 */ number | never;
  nameTagVisibility: /* 0 */ string | /* 2 */ string | never;
  formatting: /* 0 */ number | /* 2 */ number | never;
};
type play_toclient_packet_animation = {
  entityId: number;
  animation: number;
};
type play_toclient_packet_spawn_entity_experience_orb = {
  entityId: number;
  x: number;
  y: number;
  z: number;
  count: number;
};
type play_toclient_previousMessages = previousMessages;
type play_toclient_chunkBlockEntity = chunkBlockEntity;
type play_toclient_packet_entity_metadata = {
  metadata: never;
  entityId: number;
};
type play_toserver_packet_recipe_book = {
  bookId: number;
  filterActive: boolean;
  bookOpen: boolean;
};
type configuration_toserver_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type configuration_toserver_packet_common_custom_report_details =
  packet_common_custom_report_details;
type play_toclient_ChatTypeParameterType = "content" | "sender" | "target";
type play_toclient_packet_simulation_distance = {
  distance: number;
};
type play_toclient_packet_hide_message = {
  signature: /* 0 */ never | never;
  id: number;
};
type play_toclient_packet_tags = {
  tags: {
    tags: play_toclient_tags;
    tagType: string;
  }[];
};
type play_toserver_packet_chat_message = {
  acknowledged: never;
  salt: number;
  signature: never | undefined;
  offset: number;
  message: string;
  timestamp: number;
};
type play_toserver_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type configuration_toserver_packet_pong = {
  id: number;
};
type play_toclient_packet_world_border_warning_reach = {
  warningBlocks: number;
};
type configuration_toserver_packet_keep_alive = {
  keepAliveId: number;
};
type configuration_toserver_packet_finish_configuration = Record<
  never,
  never
> & { __type: "empty_object" };
type play_toclient_packet_block_change = {
  location: never;
  type: number;
};
type handshaking_toclient_packet = {
  name: never;
  params: never;
};
type play_toclient_packet_enter_combat_event = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_packet_action_bar = {
  text: never;
};
type play_toclient_Slot = Slot;
type play_toserver_packet_set_difficulty = {
  newDifficulty: number;
};
type play_toclient_packet_keep_alive = {
  keepAliveId: number;
};
type status_toclient_packet_server_info = {
  response: string;
};
type configuration_toserver_packet_common_server_links =
  packet_common_server_links;
type play_toclient_packet_set_title_text = {
  text: never;
};
type play_toclient_packet_start_configuration = Record<never, never> & {
  __type: "empty_object";
};
type configuration_toserver_packet_common_cookie_response =
  packet_common_cookie_response;
type play_toclient_SlotComponent = SlotComponent;
type play_toserver_packet_block_place = {
  sequence: number;
  location: never;
  direction: number;
  cursorZ: number;
  insideBlock: boolean;
  cursorX: number;
  hand: number;
  cursorY: number;
};
type play_toclient_packet_set_slot = {
  slot: number;
  windowId: number;
  stateId: number;
  item: play_toclient_Slot;
};
type play_toclient_packet_respawn = {
  worldState: play_toclient_SpawnInfo;
  copyMetadata: number;
};
type play_toclient_packet_open_window = {
  windowId: number;
  windowTitle: never;
  inventoryType: number;
};
type play_toclient_packet_face_player = {
  feet_eyes: number;
  entityId: /* true */ number | never;
  entity_feet_eyes: /* true */ number | never;
  x: number;
  y: number;
  z: number;
  isEntity: boolean;
};
type play_toclient_packet_sound_effect = {
  soundCategory: play_toclient_soundSource;
  soundEvent: /* 0 */
  | {
        soundId: number;
        range: number | undefined;
        resource: string;
      }
    | never;
  volume: number;
  x: number;
  y: number;
  z: number;
  pitch: number;
  seed: number;
};
type play_toclient_packet_declare_commands = {
  rootIndex: number;
  nodes: play_toclient_command_node[];
};
type play_toclient_packet_chunk_biomes = {
  biomes: {
    position: play_toclient_packedChunkPos;
    data: play_toclient_ByteArray;
  }[];
};
type configuration_toclient_packet_keep_alive = {
  keepAliveId: number;
};
type play_toclient_packet_chunk_batch_start = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_minecraft_smelting_format = minecraft_smelting_format;
type play_toclient_packet_playerlist_header = {
  footer: never;
  header: never;
};
type play_toclient_chat_session = chat_session;
type play_toserver_packet_arm_animation = {
  hand: number;
};
type play_toclient_packet_profileless_chat = {
  name: never;
  target: never | undefined;
  type: play_toclient_ChatTypes;
  message: never;
};
type configuration_toclient_tags = tags;
type play_toclient_packet_server_data = {
  iconBytes: play_toclient_ByteArray | undefined;
  motd: never;
};
type play_toclient_packet_scoreboard_objective = {
  name: string;
  number_format: /* 0 */
  (number | undefined) | /* 2 */ (number | undefined) | never;
  styling: /* 0 */ /* 1 */
  | never
    | /* 2 */ never
    | never
    | /* 2 */ /* 1 */ never
    | /* 2 */ never
    | never
    | never;
  type: /* 0 */ number | /* 2 */ number | never;
  displayText: /* 0 */ never | /* 2 */ never | never;
  action: number;
};
type play_toserver_packet_spectate = {
  target: string;
};
type play_toclient_packet_remove_resource_pack = {
  uuid: string | undefined;
};
type play_toclient_packet_held_item_slot = {
  slot: number;
};
type play_toclient_packet_window_items = {
  windowId: number;
  stateId: number;
  carriedItem: play_toclient_Slot;
  items: play_toclient_Slot[];
};
type play_toclient_tags = tags;
type play_toclient_soundSource = soundSource;
type play_toserver_packet_set_creative_slot = {
  slot: number;
  item: play_toserver_Slot;
};
type play_toclient_packet_acknowledge_player_digging = {
  sequenceId: number;
};
type play_toclient_packet_tile_entity_data = {
  nbtData: play_toclient_anonOptionalNbt;
  location: never;
  action: number;
};
type play_toclient_packet_set_passengers = {
  entityId: number;
  passengers: number[];
};
type play_toclient_packet_world_border_center = {
  x: number;
  z: number;
};
type play_toclient_packet_remove_entity_effect = {
  effectId: number;
  entityId: number;
};
type login_toclient_packet_encryption_begin = {
  publicKey: never;
  shouldAuthenticate: boolean;
  serverId: string;
  verifyToken: never;
};
type play_toclient_packet_update_health = {
  foodSaturation: number;
  health: number;
  food: number;
};
type play_toserver_packet_generate_structure = {
  location: never;
  keepJigsaws: boolean;
  levels: number;
};
