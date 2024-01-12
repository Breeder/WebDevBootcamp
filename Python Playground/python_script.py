################################################################################
# Calculate gains
################################################################################
def CalculateGains(days, startAmount, percentage):
    currentAmount = startAmount
    percentage    = percentage / 100
    gains         = 0

    for i in range(days):
        gains         += currentAmount * percentage
        currentAmount += gains
    print(f"Current gains are {gains:.2f} and that equals to {gains / 1000000:.2f} millions")


CalculateGains(days = 73, startAmount = 100, percentage = 5)


