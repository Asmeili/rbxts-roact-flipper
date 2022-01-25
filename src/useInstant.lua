local nodeModules = script.Parent.Parent.Parent
local Flipper = require(nodeModules.flipper.src)

local useGoal = require(script.Parent.useGoal)

local function useInstant(hooks, targetValue)
	return useGoal(hooks, Flipper.Instant.new(targetValue))
end

return useInstant