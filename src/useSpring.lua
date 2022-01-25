local nodeModules = script.Parent.Parent.Parent
local Flipper = require(nodeModules.flipper.src)

local useGoal = require(script.Parent.useGoal)

local function useSpring(hooks, targetValue, options)
	return useGoal(hooks, Flipper.Spring.new(targetValue, options))
end

return useSpring