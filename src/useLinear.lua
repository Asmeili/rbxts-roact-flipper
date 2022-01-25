local nodeModules = script.Parent.Parent.Parent
local Flipper = require(nodeModules.flipper.src)

local useGoal = require(script.Parent.useGoal)

local function useLinear(hooks, targetValue, options)
	return useGoal(hooks, Flipper.Linear.new(targetValue, options))
end

return useLinear