--- #calculate compliance rating

CREATE FUNCTION calculate_compliance_rating() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN
    NEW.rating = (NEW.capability + NEW.confidence) - 1;
    RETURN NEW;
END
$$;

CREATE TRIGGER trigger_compliance_rating
BEFORE INSERT OR UPDATE
ON compliance
FOR EACH ROW
EXECUTE FUNCTION calculate_compliance_rating();

--- #calculate risk rating

CREATE FUNCTION calculate_risk_rating() RETURNS trigger
    LANGUAGE plpgsql
    AS $$

BEGIN
    NEW.level = NEW.likelihood * NEW.impact;
    RETURN NEW;
END
$$;

CREATE TRIGGER trigger_risk_rating
BEFORE INSERT OR UPDATE
ON risks
FOR EACH ROW
EXECUTE FUNCTION calculate_risk_rating();
