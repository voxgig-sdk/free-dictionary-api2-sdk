# FreeDictionaryApi2 SDK utility: feature_add
module FreeDictionaryApi2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
